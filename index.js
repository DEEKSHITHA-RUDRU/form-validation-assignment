document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let u = user.value, em = email.value;
    let p = pass.value, cp = cpass.value;
    let valid = true;

    uerr.innerHTML = u.length < 5 ? "Username must have 5 characters." : "";
    
    eerr.innerHTML = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)
        ? "" : "Enter a valid email.";

    perr.innerHTML = p.length <= 12 || !/[!@#$%^&*]/.test(p)
        ? "Password must be >12 characters and contain a special symbol." : "";

    cerr.innerHTML = p !== cp ? "Passwords do not match." : "";

    if (u.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) ||
        p.length <= 12 || !/[!@#$%^&*]/.test(p) || p !== cp)
        valid = false;

    if (valid)
        alert("Form submitted successfully!");
};