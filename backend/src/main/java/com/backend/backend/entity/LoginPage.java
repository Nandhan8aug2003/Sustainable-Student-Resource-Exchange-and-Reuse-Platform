package com.backend.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoginPage {
    @Id
    private int usn;
    private int password;

    public int getUsn() {
        return usn;
    }

    public void setUsn(int usn) {
        this.usn = usn;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }
}
