import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actualCostSchema, type ActualCost } from "./unions/actual-cost.js";
import { buildIdSchema, type BuildId } from "./unions/build-id.js";
import { cpuMillicoresSchema, type CpuMillicores } from "./unions/cpu-millicores.js";
import { ec2InstanceTypeSchema, type Ec2InstanceType } from "./unions/ec2-instance-type.js";
import { fileTrackingEnabledSchema, type FileTrackingEnabled } from "./unions/file-tracking-enabled.js";
import { hourlyRateSchema, type HourlyRate } from "./unions/hourly-rate.js";
import { maxRuntimeSecondsSchema, type MaxRuntimeSeconds } from "./unions/max-runtime-seconds.js";
import { maxSessionSecondsSchema, type MaxSessionSeconds } from "./unions/max-session-seconds.js";
import { memoryGbSchema, type MemoryGb } from "./unions/memory-gb.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { noExternalAccessSchema, type NoExternalAccess } from "./unions/no-external-access.js";
import { protocolVersionSchema, type ProtocolVersion } from "./unions/protocol-version.js";
import { publicIpSchema, type PublicIp } from "./unions/public-ip.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";
import { terminatedAtSchema, type TerminatedAt } from "./unions/terminated-at.js";
import { tierSchema, type Tier } from "./unions/tier.js";
import { timeoutSecondsSchema, type TimeoutSeconds } from "./unions/timeout-seconds.js";
import { traceSchema, type Trace } from "./unions/trace.js";
import { userAvatarUrlSchema, type UserAvatarUrl } from "./unions/user-avatar-url.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";
import { vncUrlSchema, type VncUrl } from "./unions/vnc-url.js";

export type ActiveInstance = {
  id: string;
  registryId?: RegistryId;
  buildId?: BuildId;
  status: string;
  createdAt: Date;
  terminatedAt?: TerminatedAt;
  publicIp?: PublicIp;
  ec2InstanceType?: Ec2InstanceType;
  maxRuntimeSeconds?: MaxRuntimeSeconds;
  userName?: UserName;
  userAvatarUrl?: UserAvatarUrl;
  actualCost?: ActualCost;
  hourlyRate?: HourlyRate;
  tier?: Tier;
  cpuMillicores?: CpuMillicores;
  memoryGb?: MemoryGb;
  timeoutSeconds?: TimeoutSeconds;
  maxSessionSeconds?: MaxSessionSeconds;
  fileTrackingEnabled?: FileTrackingEnabled;
  noExternalAccess?: NoExternalAccess;
  protocolVersion?: ProtocolVersion;
  vncUrl?: VncUrl;
  metadata?: Metadata;
  trace?: Trace;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeInstanceSchema: Schema<ActiveInstance> = s.object<ActiveInstance>(
  {
    id: s.string(),
    registryId: s.optional(s.lazy(() => registryIdSchema)),
    buildId: s.optional(s.lazy(() => buildIdSchema)),
    status: s.string(),
    createdAt: s.dateTime(),
    terminatedAt: s.optional(s.lazy(() => terminatedAtSchema)),
    publicIp: s.optional(s.lazy(() => publicIpSchema)),
    ec2InstanceType: s.optional(s.lazy(() => ec2InstanceTypeSchema)),
    maxRuntimeSeconds: s.optional(s.lazy(() => maxRuntimeSecondsSchema)),
    userName: s.optional(s.lazy(() => userNameSchema)),
    userAvatarUrl: s.optional(s.lazy(() => userAvatarUrlSchema)),
    actualCost: s.optional(s.lazy(() => actualCostSchema)),
    hourlyRate: s.optional(s.lazy(() => hourlyRateSchema)),
    tier: s.optional(s.lazy(() => tierSchema)),
    cpuMillicores: s.optional(s.lazy(() => cpuMillicoresSchema)),
    memoryGb: s.optional(s.lazy(() => memoryGbSchema)),
    timeoutSeconds: s.optional(s.lazy(() => timeoutSecondsSchema)),
    maxSessionSeconds: s.optional(s.lazy(() => maxSessionSecondsSchema)),
    fileTrackingEnabled: s.optional(s.lazy(() => fileTrackingEnabledSchema)),
    noExternalAccess: s.optional(s.lazy(() => noExternalAccessSchema)),
    protocolVersion: s.optional(s.lazy(() => protocolVersionSchema)),
    vncUrl: s.optional(s.lazy(() => vncUrlSchema)),
    metadata: s.optional(s.lazy(() => metadataSchema)),
    trace: s.optional(s.lazy(() => traceSchema)),
    _keysMap: {
      registryId: "registry_id",
      buildId: "build_id",
      createdAt: "created_at",
      terminatedAt: "terminated_at",
      publicIp: "public_ip",
      ec2InstanceType: "ec2_instance_type",
      maxRuntimeSeconds: "max_runtime_seconds",
      userName: "user_name",
      userAvatarUrl: "user_avatar_url",
      actualCost: "actual_cost",
      hourlyRate: "hourly_rate",
      cpuMillicores: "cpu_millicores",
      memoryGb: "memory_gb",
      timeoutSeconds: "timeout_seconds",
      maxSessionSeconds: "max_session_seconds",
      fileTrackingEnabled: "file_tracking_enabled",
      noExternalAccess: "no_external_access",
      protocolVersion: "protocol_version",
      vncUrl: "vnc_url",
    },
  },
  { additionalProperties: s.json() },
);
