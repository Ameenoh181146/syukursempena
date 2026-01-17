// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ฟังก์ชัน cn (Class Name) 
 * ใช้สำหรับรวม Tailwind classes และจัดการ classes ที่ซ้ำซ้อนกัน
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}