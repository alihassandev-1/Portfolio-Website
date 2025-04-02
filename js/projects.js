        // Code Snippets for Projects
     const codeSnippets = {
         project1: {
             py: `import tkinter as tk
from tkinter import filedialog, messagebox

# Initialize the main application window
app = tk.Tk()
app.title("Modern Text Editor")
app.geometry("800x600")

# Set modern styles
app.configure(bg="#2c3e50")
font_style = ("Helvetica", 14)
text_bg = "#ecf0f1"
text_fg = "#2c3e50"

# Text widget for content editing
text_area = tk.Text(app, wrap=tk.WORD, font=font_style, bg=text_bg, fg=text_fg, undo=True)
text_area.pack(expand=1, fill=tk.BOTH, padx=10, pady=10)

# Current file path
current_file = None

# Functions
def new_file():
    global current_file
    current_file = None
    text_area.delete(1.0, tk.END)
    app.title("New File - Modern Text Editor")

def open_file():
    global current_file
    file_path = filedialog.askopenfilename(filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")])
    if file_path:
        try:
            with open(file_path, "r") as file:
                content = file.read()
            text_area.delete(1.0, tk.END)
            text_area.insert(tk.END, content)
            current_file = file_path
            app.title(f"{file_path} - Modern Text Editor")
        except Exception as e:
            messagebox.showerror("Error", f"Could not open file: {e}")

def save_file():
    global current_file
    if current_file:
        try:
            with open(current_file, "w") as file:
                file.write(text_area.get(1.0, tk.END))
            messagebox.showinfo("Success", "File saved successfully!")
        except Exception as e:
            messagebox.showerror("Error", f"Could not save file: {e}")
    else:
        save_as_file()

def save_as_file():
    global current_file
    file_path = filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")])
    if file_path:
        try:
            with open(file_path, "w") as file:
                file.write(text_area.get(1.0, tk.END))
            current_file = file_path
            app.title(f"{file_path} - Modern Text Editor")
            messagebox.showinfo("Success", "File saved successfully!")
        except Exception as e:
            messagebox.showerror("Error", f"Could not save file: {e}")

def exit_app():
    if messagebox.askyesno("Exit", "Do you want to save changes before exiting?"):
        save_file()
    app.destroy()

# Menu bar
menu_bar = tk.Menu(app, bg="#34495e", fg="#ecf0f1", activebackground="#16a085", activeforeground="white")

# File menu
file_menu = tk.Menu(menu_bar, tearoff=0, bg="#34495e", fg="white", activebackground="#16a085", activeforeground="white")
file_menu.add_command(label="New", command=new_file)
file_menu.add_command(label="Open", command=open_file)
file_menu.add_command(label="Save", command=save_file)
file_menu.add_command(label="Save As", command=save_as_file)
file_menu.add_separator()
file_menu.add_command(label="Exit", command=exit_app)
menu_bar.add_cascade(label="File", menu=file_menu)

# Edit menu
edit_menu = tk.Menu(menu_bar, tearoff=0, bg="#34495e", fg="white", activebackground="#16a085", activeforeground="white")
edit_menu.add_command(label="Undo", command=text_area.edit_undo)
edit_menu.add_command(label="Redo", command=text_area.edit_redo)
edit_menu.add_separator()
edit_menu.add_command(label="Cut", command=lambda: app.focus_get().event_generate("<<Cut>>"))
edit_menu.add_command(label="Copy", command=lambda: app.focus_get().event_generate("<<Copy>>"))
edit_menu.add_command(label="Paste", command=lambda: app.focus_get().event_generate("<<Paste>>"))
menu_bar.add_cascade(label="Edit", menu=edit_menu)

# Add menu bar to the application
app.config(menu=menu_bar)

# Run the application
app.mainloop()`,
            },
            project2: {
                html: `    <div class="button-container">
        <button class="btn bounce" style="background-color: #FF5733;">Button 1</button>
        <button class="btn rotate" style="background-color: #33FF57;">Button 2</button>
        <button class="btn slide" style="background-color: #3357FF;">Button 3</button>
        <button class="btn fade" style="background-color: #FF33A1;">Button 4</button>
        <button class="btn zoom" style="background-color: #FF9F33;">Button 5</button>
        <button class="btn pulse" style="background-color: #33FFE0;">Button 6</button>
        <button class="btn swing" style="background-color: #FF333F;">Button 7</button>
        <button class="btn flip" style="background-color: #33C7FF;">Button 8</button>
        <button class="btn jump" style="background-color: #57FF33;">Button 9</button>
        <button class="btn shake" style="background-color: #6B33FF;">Button 10</button>
        <button class="btn expand" style="background-color: #FFA833;">Button 11</button>
        <button class="btn shrink" style="background-color: #FF33C1;">Button 12</button>
        <button class="btn spin" style="background-color: #AFFF33;">Button 13</button>
        <button class="btn wobble" style="background-color: #336BFF;">Button 14</button>
        <button class="btn vibrate" style="background-color: #FFD233;">Button 15</button>
        <button class="btn pop" style="background-color: #A1FF33;">Button 16</button>
        <button class="btn glow" style="background-color: #FF573A;">Button 17</button>
        <button class="btn rotateX" style="background-color: #33FF9F;">Button 18</button>
        <button class="btn rotateY" style="background-color: #338CFF;">Button 19</button>
        <button class="btn fadeInOut" style="background-color: #FF33C7;">Button 20</button>
        <button class="btn zoomInOut" style="background-color: #FF9933;">Button 21</button>
        <button class="btn bounceInOut" style="background-color: #33EFFF;">Button 22</button>
        <button class="btn slideInOut" style="background-color: #33FF57;">Button 23</button>
        <button class="btn flipInOut" style="background-color: #FF5733;">Button 24</button>
        <button class="btn jumpInOut" style="background-color: #5733FF;">Button 25</button>
        <button class="btn pulseInOut" style="background-color: #FF33D6;">Button 26</button>
        <button class="btn popInOut" style="background-color: #D6FF33;">Button 27</button>
        <button class="btn wobbleInOut" style="background-color: #33FF33;">Button 28</button>
        <button class="btn vibrateInOut" style="background-color: #FF33B2;">Button 29</button>
        <button class="btn expandInOut" style="background-color: #33FFA5;">Button 30</button>
        <button class="btn shrinkInOut" style="background-color: #33FFEC;">Button 31</button>
    </div>`,
                css: `.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.btn {
    padding: 15px 30px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform: perspective(500px) translateZ(0);
    cursor: pointer;
}

.btn:hover {
    transform: perspective(500px) translateZ(20px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Animations */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}

@keyframes fade {
    0% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes zoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.2); }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes swing {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
}

@keyframes flip {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
}

@keyframes jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

@keyframes expand {
    0% { transform: scale(1); }
    100% { transform: scale(1.5); }
}

@keyframes shrink {
    0% { transform: scale(1); }
    100% { transform: scale(0.5); }
}

@keyframes spin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

@keyframes wobble {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    75% { transform: rotate(-10deg); }
}

@keyframes vibrate {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(3px); }
}

@keyframes pop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

@keyframes glow {
    0% { box-shadow: 0 0 10px white; }
    100% { box-shadow: 0 0 30px white; }
}

@keyframes rotateX {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
}

@keyframes rotateY {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

/* Button-specific animations */
.bounce:hover { animation: bounce 0.5s ease infinite; }
.rotate:hover { animation: rotate 1s linear infinite; }
.slide:hover { animation: slide 1s ease; }
.fade:hover { animation: fade 1s ease; }
.zoom:hover { animation: zoom 0.5s ease; }
.pulse:hover { animation: pulse 1s ease infinite; }
.swing:hover { animation: swing 0.5s ease infinite; }
.flip:hover { animation: flip 1s ease infinite; }
.jump:hover { animation: jump 0.5s ease infinite; }
.shake:hover { animation: shake 0.5s ease infinite; }
.expand:hover { animation: expand 0.5s ease; }
.shrink:hover { animation: shrink 0.5s ease; }
.spin:hover { animation: spin 1s ease infinite; }
.wobble:hover { animation: wobble 1s ease infinite; }
.vibrate:hover { animation: vibrate 0.5s ease infinite; }
.pop:hover { animation: pop 0.5s ease infinite; }
.glow:hover { animation: glow 1s ease infinite; }
.rotateX:hover { animation: rotateX 1s ease infinite; }
.rotateY:hover { animation: rotateY 1s ease infinite; }`,
         },
         project3: {
            html: `    <div class="calculator">
        <input type="text" id="result" placeholder="0" readonly>
        <div class="row">
            <button class="btn">AC</button>
            <button class="btn">DEL</button>
            <button class="btn">%</button>
            <button class="btn">/</button>
        </div>
        <div class="row">
            <button class="btn">7</button>
            <button class="btn">8</button>
            <button class="btn">9</button>
            <button class="btn">*</button>
        </div>
        <div class="row">
            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn">6</button>
            <button class="btn">-</button>
        </div>
        <div class="row">
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn">+</button>
        </div>
        <div class="row">
            <button class="btn">00</button>
            <button class="btn">0</button>
            <button class="btn">.</button>
            <button class="btn">=</button>
        </div>
    </div>
    </div>`, 
    css: `body {
            width: 100%;
            height: 100%;
            background-image: url(https://images.unsplash.com/photo-1726853550443-20b90f727b9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .calculator {
            border: 2px solid #000;
            width: 225px;
            height: 370px;
            position: absolute;
            padding: 15px 20px 0px 20px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
            border-radius: 10px;
            background-color: #0000004d;
        }

        .calculator input {
            width: 100%;
            height: 80px;
            text-align: end;
            background-color: #000000b9;
            border: none;
            border-radius: 5px;
            color: orangered;
            font-size: 26px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        input:hover {
            border: none;
        }

        .row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 10px;
        }

        button {
            font-size: 24px;
            padding: 5px 10px;
            cursor: pointer;
            background-color: #13131398;
            border: none;
            box-shadow: 0px 0px 3px rgb(36, 36, 36);
            border-radius: 8px;
            color: #fff;
            font-weight: 500;
        }

        button:hover {
            color: orange;
            background-color: #000000bd;
        }`,
        js: `var display = document.querySelector("input")
        var buttons = document.querySelectorAll(".btn")

        var buttonArray = Array.from(buttons);

        let string = ''


        buttonArray.forEach(btn => {
            btn.addEventListener("click", (e) => {
                display.value = string;

                if (e.target.innerHTML == 'DEL') {
                    string = string.substring(0, string.length - 1);
                    display.value = string;
                } else if (e.target.innerHTML == 'AC') {
                    string = '';
                    display.value = string;
                } else if (e.target.innerHTML == '=') {
                    string = eval(string)
                    display.value = string;
                }
                else {
                    string += e.target.innerHTML;
                    display.value = string;
                }

                console.log(e.target.innerHTML)
            })
        });`,
         } 
        //  Project4
        };

