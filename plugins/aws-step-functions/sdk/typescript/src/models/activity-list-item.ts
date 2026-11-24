import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityListItem = {
  /** The Amazon Resource Name (ARN) that identifies the activity. */
  activityArn: string;
  /**
   * The name of the activity. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  /** The date the activity is created. */
  creationDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityListItemSchema: Schema<ActivityListItem> = s.object<ActivityListItem>(
  {
    activityArn: s.string(),
    name: s.string(),
    creationDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
