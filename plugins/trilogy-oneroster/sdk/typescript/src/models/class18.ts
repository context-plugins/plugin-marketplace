import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classTypeSchema, type ClassType } from "./class-type.js";
import { resource3Schema, type Resource3 } from "./resource3.js";
import { statusSchema, type Status } from "./status.js";
import { term2Schema, type Term2 } from "./term2.js";

export type Class18 = {
  status?: Status;
  metadata?: Record<string, Record<string, unknown>>;
  title?: string;
  classCode?: string;
  classType?: ClassType;
  location?: string;
  grades?: string[];
  subjects?: string[];
  subjectCodes?: string[];
  periods?: string[];
  resources?: Resource3[];
  terms?: Term2[];
};

export const class18Schema: Schema<Class18> = s.object<Class18>({
  status: s.optional(s.lazy(() => statusSchema)),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.optional(s.string()),
  classCode: s.optional(s.string()),
  classType: s.optional(s.lazy(() => classTypeSchema)),
  location: s.optional(s.string()),
  grades: s.optional(s.array(s.string())),
  subjects: s.optional(s.array(s.string())),
  subjectCodes: s.optional(s.array(s.string())),
  periods: s.optional(s.array(s.string())),
  resources: s.optional(s.array(s.lazy(() => resource3Schema))),
  terms: s.optional(s.array(s.lazy(() => term2Schema))),
});
