export { AmazonVpcClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { InternetGateways } from "./resources/internet-gateways.js";
export { NatGateways } from "./resources/nat-gateways.js";
export { NetworkAcLs } from "./resources/network-ac-ls.js";
export { RouteTables } from "./resources/route-tables.js";
export { Subnets } from "./resources/subnets.js";
export { VpCs } from "./resources/vp-cs.js";

export { associationSchema, type Association } from "./models/association.js";
export { attachmentSchema, type Attachment } from "./models/attachment.js";
export {
  cidrBlockAssociationSetSchema,
  type CidrBlockAssociationSet,
} from "./models/cidr-block-association-set.js";
export { cidrBlockStateSchema, type CidrBlockState } from "./models/cidr-block-state.js";
export { ConnectivityType, connectivityTypeSchema } from "./models/connectivity-type.js";
export { ConnectivityType1, connectivityType1Schema } from "./models/connectivity-type1.js";
export {
  createInternetGatewayResponseSchema,
  type CreateInternetGatewayResponse,
} from "./models/create-internet-gateway-response.js";
export {
  createNatGatewayResponseSchema,
  type CreateNatGatewayResponse,
} from "./models/create-nat-gateway-response.js";
export {
  createRouteTableResponseSchema,
  type CreateRouteTableResponse,
} from "./models/create-route-table-response.js";
export { createSubnetResponseSchema, type CreateSubnetResponse } from "./models/create-subnet-response.js";
export { createVpcResponseSchema, type CreateVpcResponse } from "./models/create-vpc-response.js";
export {
  describeSubnetsResponseSchema,
  type DescribeSubnetsResponse,
} from "./models/describe-subnets-response.js";
export { describeVpcsResponseSchema, type DescribeVpcsResponse } from "./models/describe-vpcs-response.js";
export { InstanceTenancy, instanceTenancySchema } from "./models/instance-tenancy.js";
export { InstanceTenancy1, instanceTenancy1Schema } from "./models/instance-tenancy1.js";
export { internetGatewaySchema, type InternetGateway } from "./models/internet-gateway.js";
export {
  ipv6CidrBlockAssociationSetSchema,
  type Ipv6CidrBlockAssociationSet,
} from "./models/ipv6-cidr-block-association-set.js";
export { ipv6CidrBlockStateSchema, type Ipv6CidrBlockState } from "./models/ipv6-cidr-block-state.js";
export { natGatewaySchema, type NatGateway } from "./models/nat-gateway.js";
export { natGatewayAddressSchema, type NatGatewayAddress } from "./models/nat-gateway-address.js";
export { Origin, originSchema } from "./models/origin.js";
export { routeSchema, type Route } from "./models/route.js";
export { routeTableSchema, type RouteTable } from "./models/route-table.js";
export { State, stateSchema } from "./models/state.js";
export {
  StateAmazonVpcNatGatewaysApi,
  stateAmazonVpcNatGatewaysApiSchema,
} from "./models/state-amazon-vpc-nat-gateways-api.js";
export {
  StateAmazonVpcRouteTablesApi,
  stateAmazonVpcRouteTablesApiSchema,
} from "./models/state-amazon-vpc-route-tables-api.js";
export {
  StateAmazonVpcSubnetsApi,
  stateAmazonVpcSubnetsApiSchema,
} from "./models/state-amazon-vpc-subnets-api.js";
export { StateAmazonVpcVpCsApi, stateAmazonVpcVpCsApiSchema } from "./models/state-amazon-vpc-vp-cs-api.js";
export { subnetSchema, type Subnet } from "./models/subnet.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { vpcSchema, type Vpc } from "./models/vpc.js";

export {
  CoreError as AmazonVpcError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
