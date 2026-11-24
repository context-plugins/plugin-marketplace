import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gatewayCapacity1Schema, type GatewayCapacity1 } from "./gateway-capacity1.js";

export type UpdateGatewayInformationInput = {
  gatewayArn: string;
  gatewayName?: string;
  /** A value that indicates the time zone of the gateway. */
  gatewayTimezone?: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use to
   * monitor and log events in the gateway. For more information, see What is Amazon CloudWatch
   * Logs?
   */
  cloudWatchLogGroupArn?: string;
  /**
   * Specifies the size of the gateway's metadata cache. This setting impacts gateway performance
   * and hardware recommendations. For more information, see Performance guidance for gateways with
   * multiple file shares in the Amazon S3 File Gateway User Guide.
   */
  gatewayCapacity?: GatewayCapacity1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateGatewayInformationInputSchema: Schema<UpdateGatewayInformationInput> =
  s.object<UpdateGatewayInformationInput>(
    {
      gatewayArn: s.string(),
      gatewayName: s.optional(s.string()),
      gatewayTimezone: s.optional(s.string()),
      cloudWatchLogGroupArn: s.optional(s.string()),
      gatewayCapacity: s.optional(s.lazy(() => gatewayCapacity1Schema)),
      _keysMap: {
        gatewayArn: "GatewayARN",
        gatewayName: "GatewayName",
        gatewayTimezone: "GatewayTimezone",
        cloudWatchLogGroupArn: "CloudWatchLogGroupARN",
        gatewayCapacity: "GatewayCapacity",
      },
    },
    { additionalProperties: s.json() },
  );
