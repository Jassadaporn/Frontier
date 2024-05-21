// ใช้การ import สำหรับ ES Modules
import globals from "globals";

export default [
    {
        files: ["**/*.js"],  // กำหนดไฟล์ที่จะใช้กฎนี้
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,  // รวมกลุ่มตัวแปรสำหรับ browser
                myCustomGlobal: "readonly"  // ตัวแปรที่กำหนดเอง
            }
        }
        // สามารถเพิ่ม other config ได้ตามต้องการ
    }
];
