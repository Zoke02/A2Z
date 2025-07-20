🛠️ Installation & Setup (XAMPP)

1. **Install XAMPP**
   - Download and install [XAMPP](https://www.apachefriends.org/index.html)
   - Make sure Apache and MySQL are running in the XAMPP Control Panel

2. **Clone or Download the Repository**
   - Clone this repo or download and extract the ZIP

3. **Move the Project into `htdocs`**
   - Copy the project folder into your XAMPP `htdocs` directory:
     ```
     C:\xampp\htdocs\JuniorWebDeveloper-Project\
     ```

4. **Set Up the Database**
   - Open [phpMyAdmin](http://localhost/phpmyadmin)
   - Create a new database (e.g. `a2z`)
   - Import the provided `.sql` file (if available) or manually create required tables

5. **Configure Database Connection**
   - Open the project’s DB config file (e.g. `config.php` or similar)
   - Default Users Password: 1234
   - Update database name, username, and password if needed:
     ```php
     $host = "localhost";
     $user = "root";
     $pass = "";
     $db   = "a2z";
     ```

6. **Access the Project**
   - In your browser, navigate to:
     ```
     http://localhost/JuniorWebDeveloper-Project/
     ```

---

> 💡 This project is built with PHP (OOP), HTML, CSS, JavaScript, and Bootstrap.
