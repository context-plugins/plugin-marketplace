import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Job application information. */
export type ApplicationInfo2 = {
  /**
   * Use this URI field to direct an applicant to a website, for example to link to an online
   * application form. The maximum number of allowed characters for each entry is 2,000.
   */
  uris?: string[];
  /**
   * Use this field to provide instructions, such as "Mail your application to ...", that a
   * candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and
   * also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of
   * allowed characters is 3,000.
   */
  instruction?: string;
  /**
   * Use this field to specify email address(es) to which resumes or applications can be sent. The
   * maximum number of allowed characters for each entry is 255.
   */
  emails?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationInfo2Schema: Schema<ApplicationInfo2> = s.object<ApplicationInfo2>(
  {
    uris: s.optional(s.array(s.string())),
    instruction: s.optional(s.string()),
    emails: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
