import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type2 = {
  AcademicSession: "academicSession",
  AssessmentLineItem: "assessmentLineItem",
  Category: "category",
  Class: "class",
  Course: "course",
  Demographics: "demographics",
  Enrollment: "enrollment",
  GradingPeriod: "gradingPeriod",
  LineItem: "lineItem",
  Org: "org",
  Resource: "resource",
  Result: "result",
  ScoreScale: "scoreScale",
  Student: "student",
  Teacher: "teacher",
  Term: "term",
  User: "user",
  ComponentResource: "componentResource",
  CourseComponent: "courseComponent",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
