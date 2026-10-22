import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdtokenReissueRequest = {
  /**
   * The value of this parameter should be (a) the value of the "`jwtAccessToken`" parameter in a
   * response from the `/auth/token` API when the value is available, or (b) the value of the
   * "`accessToken`" parameter in the response from the `/auth/token` API when the value of the
   * "`jwtAccessToken`" parameter is not available.
   */
  accessToken: string;
  /**
   * The value of this parameter should be the value of the "`refreshToken`" parameter in a response
   * from the `/auth/token` API.
   */
  refreshToken?: string;
  /**
   * The value that should be used as the value of the "`sub`" claim of the ID token. This parameter
   * is optional. When omitted, the value of the subject associated with the access token is used.
   */
  sub?: string;
  /**
   * Additional claims that should be embedded in the payload part of the ID token. The format is a
   * JSON object. This parameter is optional.
   */
  claims?: string;
  /**
   * Additional parameters that should be embedded in the JWS header of the ID token. The format is
   * a JSON object. This parameter is optional.
   */
  idtHeaderParams?: string;
  /**
   * The type of the "`aud`" claim of the ID token being issued. Valid values of this parameter are
   * as follows. > | Value | Description | | --- | --- | | "`array`" | The type of the `aud` claim
   * becomes an array of strings. | | "`string`" | The type of the `aud` claim becomes a single
   * string. | This parameter is optional, and the default value on omission is "`array`". This
   * parameter takes precedence over the `idTokenAudType` property of &#123;@link Service&#125; (cf.
   * &#123;@link Service#getIdTokenAudType()&#125;).
   */
  idTokenAudType?: string;
};

export const idtokenReissueRequestSchema: Schema<IdtokenReissueRequest> = s.object<IdtokenReissueRequest>({
  accessToken: s.string(),
  refreshToken: s.optional(s.string()),
  sub: s.optional(s.string()),
  claims: s.optional(s.string()),
  idtHeaderParams: s.optional(s.string()),
  idTokenAudType: s.optional(s.string()),
});
