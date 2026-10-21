import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MemberImportItem = {
  /**
   * An error message, including CSV line number, if the <code>status</code> is <code>error</code>
   */
  message?: string;
  /**
   * Whether this member can be successfully imported (<code>success</code>) or not
   * (<code>error</code>). Even if the status is <code>success</code>, members are only added to a
   * team on a <code>201</code> response.
   */
  status: string;
  /**
   * The email address for the member requested to be added to this team. May be blank or an error,
   * such as 'invalid email format', if the email address cannot be found or parsed.
   */
  value: string;
};

export const memberImportItemSchema: Schema<MemberImportItem> = s.object<MemberImportItem>({
  message: s.optional(s.string()),
  status: s.string(),
  value: s.string(),
});
