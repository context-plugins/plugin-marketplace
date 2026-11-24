import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { secret2Schema, type Secret2 } from "./secret2.js";

/** Configuration information for a Kerberos principal. */
export type KerberosConfig2 = {
  /**
   * Optional. A Kerberos keytab file that can be used to authenticate a service principal with a
   * Kerberos Key Distribution Center (KDC).
   */
  keytab?: Secret2;
  /**
   * Optional. A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A
   * typical principal is of the form primary/instance@REALM, but there is no exact format.
   */
  principal?: string;
  /**
   * Optional. A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form
   * gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf
   * explicitly.
   */
  krb5ConfigGcsUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kerberosConfig2Schema: Schema<KerberosConfig2> = s.object<KerberosConfig2>(
  {
    keytab: s.optional(s.lazy(() => secret2Schema)),
    principal: s.optional(s.string()),
    krb5ConfigGcsUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
