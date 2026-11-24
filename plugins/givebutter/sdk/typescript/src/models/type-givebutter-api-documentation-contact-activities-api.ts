import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeGivebutterApiDocumentationContactActivitiesApi = {
  Email: "email",
  Meeting: "meeting",
  Note: "note",
  PhoneCall: "phone_call",
  Sms: "sms",
  CompletedTask: "completed_task",
  VolunteerActivity: "volunteer_activity",
} as const;
export type TypeGivebutterApiDocumentationContactActivitiesApi =
  | (typeof TypeGivebutterApiDocumentationContactActivitiesApi)[keyof typeof TypeGivebutterApiDocumentationContactActivitiesApi]
  | (string & {});

export const typeGivebutterApiDocumentationContactActivitiesApiSchema: EnumSchema<TypeGivebutterApiDocumentationContactActivitiesApi> =
  s.enumOf<TypeGivebutterApiDocumentationContactActivitiesApi>(
    TypeGivebutterApiDocumentationContactActivitiesApi,
  );
