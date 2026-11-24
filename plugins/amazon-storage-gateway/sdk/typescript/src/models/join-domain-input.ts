import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JoinDomainInput = {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list
   * of gateways for your account and Amazon Web Services Region.
   */
  gatewayArn: string;
  /** The name of the domain that you want the gateway to join. */
  domainName: string;
  /**
   * The organizational unit (OU) is a container in an Active Directory that can hold users, groups,
   * computers, and other OUs and this parameter specifies the OU that the gateway will join within
   * the AD domain.
   */
  organizationalUnit?: string;
  /**
   * List of IP addresses, NetBIOS names, or host names of your domain server. If you need to
   * specify the port number include it after the colon (“:”). For example, mydc.mydomain.com:389.
   * S3 File Gateway supports IPv6 addresses in addition to IPv4 and other existing formats. FSx
   * File Gateway does not support IPv6.
   */
  domainControllers?: string[];
  /**
   * Specifies the time in seconds, in which the JoinDomain operation must complete. The default is
   * 20 seconds.
   */
  timeoutInSeconds?: number;
  /**
   * Sets the user name of user who has permission to add the gateway to the Active Directory
   * domain. The domain user account should be enabled to join computers to the domain. For example,
   * you can use the domain administrator account or an account with delegated permissions to join
   * computers to the domain.
   */
  userName: string;
  /**
   * Sets the password of the user who has permission to add the gateway to the Active Directory
   * domain.
   */
  password: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const joinDomainInputSchema: Schema<JoinDomainInput> = s.object<JoinDomainInput>(
  {
    gatewayArn: s.string(),
    domainName: s.string(),
    organizationalUnit: s.optional(s.string()),
    domainControllers: s.optional(s.array(s.string())),
    timeoutInSeconds: s.optional(s.int()),
    userName: s.string(),
    password: s.string(),
    _keysMap: {
      gatewayArn: "GatewayARN",
      domainName: "DomainName",
      organizationalUnit: "OrganizationalUnit",
      domainControllers: "DomainControllers",
      timeoutInSeconds: "TimeoutInSeconds",
      userName: "UserName",
      password: "Password",
    },
  },
  { additionalProperties: s.json() },
);
