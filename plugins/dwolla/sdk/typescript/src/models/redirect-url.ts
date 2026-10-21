import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RedirectUrl = {
  /**
   * Required for Plaid mobile sessions. For Android: use app URI scheme (e.g., com.example.app123)
   * For iOS: use HTTPS URL (e.g., https://example.com/app123)
   */
  href: string;
};

export const redirectUrlSchema: Schema<RedirectUrl> = s.object<RedirectUrl>({
  href: s.string(),
});
