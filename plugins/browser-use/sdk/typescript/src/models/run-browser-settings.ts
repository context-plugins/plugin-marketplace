import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowresizingSchema, type Allowresizing } from "./unions/allowresizing.js";
import { customProxy1InternalSchema, customProxy1Schema, type CustomProxy1 } from "./unions/custom-proxy1.js";
import { profileidModelSchema, type ProfileidModel } from "./unions/profileid-model.js";
import {
  proxyCountryCode1ModelSchema,
  type ProxyCountryCode1Model,
} from "./unions/proxy-country-code1-model.js";
import { recordModelSchema, type RecordModel } from "./unions/record-model.js";
import { screenheightInternalSchema, screenheightSchema, type Screenheight } from "./unions/screenheight.js";
import { screenwidthInternalSchema, screenwidthSchema, type Screenwidth } from "./unions/screenwidth.js";

/**
 * Browser config, owned by the browser row (never the run). Follow-ups: omitted fields inherit the
 * session's prior browser; explicit values apply only to newly provisioned browsers (a live browser
 * is reused as-is). Profile is the exception: a different profile → 400; an explicit value
 * mismatching the live browser's profile (incl. null vs a profiled browser) declines reuse and
 * provisions fresh. A live browser already matching the requested profile is reused. Extensions are
 * session-wide: follow-ups inherit them, and a different set → 400 (see extensionIds).
 */
export type RunBrowserSettings = {
  /**
   * ID of a browser profile to load into the session. Profiles persist cookies, local storage, and
   * other browser state across sessions.
   */
  profileId?: ProfileidModel;
  /**
   * ISO country code to proxy the browser through. Defaults to US. Pass null to run without a
   * proxy.
   */
  proxyCountryCode?: ProxyCountryCode1Model;
  /**
   * Custom proxy for the browser. Overrides proxyCountryCode. Never stored or inherited by
   * follow-up runs; pass it on each run that should use it.
   */
  customProxy?: CustomProxy1;
  /** Custom screen width in pixels for the browser. */
  screenWidth?: Screenwidth;
  /** Custom screen height in pixels for the browser. */
  screenHeight?: Screenheight;
  /**
   * Let you or the agent resize the browser window over CDP. Resizing makes the browser easier to
   * detect. API runs default to off. Follow-up runs inherit the value of the previous browser. The
   * value applies only when the run starts a new browser.
   */
  allowResizing?: Allowresizing;
  /**
   * Record the browser session to an mp4, retrievable via GET /browsers/{id} once the browser
   * stops. API runs default to off; pass true to enable. Like other browser settings, this only
   * applies when a new browser is provisioned: a follow-up that reuses the session's live browser
   * keeps that browser's recording state. Ignored (always off) for Zero Data Retention projects.
   */
  record?: RecordModel;
  /**
   * Up to 3 ready extensions from POST /api/v4/extensions to install in every browser of the
   * session. Follow-up runs inherit the session's extensions; passing a different set returns 400.
   * After you delete an extension, omit extensionIds or pass the reduced set; later browsers skip
   * deleted extensions. The agent is not told about installed extensions, so name any extension
   * pages in the task.
   */
  extensionIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const runBrowserSettingsProperties: s.Shape<RunBrowserSettings> = {
  profileId: s.optional(s.lazy(() => profileidModelSchema)),
  proxyCountryCode: s.optional(s.lazy(() => proxyCountryCode1ModelSchema)),
  customProxy: s.optional(s.lazy(() => customProxy1InternalSchema)),
  screenWidth: s.optional(s.lazy(() => screenwidthInternalSchema)),
  screenHeight: s.optional(s.lazy(() => screenheightInternalSchema)),
  allowResizing: s.optional(s.lazy(() => allowresizingSchema)),
  record: s.optional(s.lazy(() => recordModelSchema)),
  extensionIds: s.optional(s.array(s.string())),
};

export const runBrowserSettingsInternalSchema: Schema<RunBrowserSettings> = s.object<RunBrowserSettings>(
  runBrowserSettingsProperties,
  { additionalProperties: s.json() },
);

export const runBrowserSettingsSchema: Schema<RunBrowserSettings> = s.lazySchema(() =>
  s.object<RunBrowserSettings>(
    {
      ...runBrowserSettingsProperties,
      customProxy: s.optional(s.lazy(() => customProxy1Schema)),
      screenWidth: s.optional(s.lazy(() => screenwidthSchema)),
      screenHeight: s.optional(s.lazy(() => screenheightSchema)),
      extensionIds: s.optional(s.array(s.string()).check(s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
