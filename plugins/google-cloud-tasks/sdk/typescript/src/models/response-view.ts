import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The response_view specifies which subset of the Task will be returned. By default response_view
 * is BASIC; not all information is retrieved by default because some data, such as payloads, might
 * be desirable to return only when needed because of its large size or because of the sensitivity
 * of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google
 * IAM](https://cloud.google.com/iam/) permission on the Task resource.
 */
export const ResponseView = {
  ViewUnspecified: "VIEW_UNSPECIFIED",
  Basic: "BASIC",
  Full: "FULL",
} as const;
export type ResponseView = (typeof ResponseView)[keyof typeof ResponseView] | (string & {});

export const responseViewSchema: EnumSchema<ResponseView> = s.enumOf<ResponseView>(ResponseView);
