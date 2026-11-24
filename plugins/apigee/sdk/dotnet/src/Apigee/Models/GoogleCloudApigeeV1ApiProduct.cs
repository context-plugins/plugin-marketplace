using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

public record GoogleCloudApigeeV1ApiProduct
{
    /// <summary>
    /// Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either <c>public</c>, <c>private</c>, or <c>internal</c>. Only products marked <c>public</c> are available to developers in the Apigee developer portal. For example, you can set a product to <c>internal</c> while it is in development and then change access to <c>public</c> when it is ready to release on the portal. API products marked as <c>private</c> do not appear on the portal, but can be accessed by external developers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Optional. Time interval over which the number of tokens from LLM responses is calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llmQuotaInterval")]
    public string? LlmQuotaInterval { get; init; }

    /// <summary>
    /// Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. To learn how Spaces can be used to manage resources, read the <see href="https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview">Apigee Spaces Overview</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("space")]
    public string? Space { get; init; }

    /// <summary>
    /// Response only. Modified time of this environment as milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the <c>proxy.pathsuffix</c> variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the <c>apiResources</c> element is defined to be <c>/forecastrss</c> and the base path defined for the API proxy is <c>/weather</c>, then only requests to <c>/weather/forecastrss</c> are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - <c>/<b></c>: Indicates that all sub-URIs are included. - <c>/*</c> : Indicates that only URIs one level down are included. By default, / supports the same resources as /</b> as well as the base path defined by the API proxy. For example, if the base path of the API proxy is <c>/v1/weatherapikey</c>, then the API product supports requests to <c>/v1/weatherapikey</c> and to any sub-URIs, such as <c>/v1/weatherapikey/forecastrss</c>, <c>/v1/weatherapikey/region/CA</c>, and so on. For more information, see Managing API products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiResources")]
    public IReadOnlyList<string>? ApiResources { get; init; }

    /// <summary>
    /// Time unit defined for the <c>quotaInterval</c>. Valid values include <c>minute</c>, <c>hour</c>, <c>day</c>, or <c>month</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotaTimeUnit")]
    public string? QuotaTimeUnit { get; init; }

    /// <summary>
    /// Optional. Configuration used to group Apigee proxies with resources, method types, LLM model and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources, specific LLM model and how many calls can be made (using the <c>quota</c> setting). <b>Note:</b> The <c>api_resources</c> setting cannot be specified for both the API product and llm operation group; otherwise the call will fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llmOperationGroup")]
    public GoogleCloudApigeeV1LlmOperationGroup1? LlmOperationGroup { get; init; }

    /// <summary>
    /// Response only. Creation time of this environment as milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("graphqlOperationGroup")]
    public GoogleCloudApigeeV1GraphQlOperationGroup2? GraphqlOperationGroup { get; init; }

    /// <summary>
    /// Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to <c>manual</c>, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to <c>auto</c>, the consumer key is generated and returned in "approved" state and can be used immediately. <b>Note:</b> Typically, <c>auto</c> is used to provide access to free or trial API products that provide limited quota or capabilities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvalType")]
    public string? ApprovalType { get; init; }

    /// <summary>
    /// Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in <c>prod</c> from being accessed by API proxies deployed in <c>test</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environments")]
    public IReadOnlyList<string>? Environments { get; init; }

    /// <summary>
    /// Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<string>? Scopes { get; init; }

    /// <summary>
    /// Time interval over which the number of request messages is calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotaInterval")]
    public string? QuotaInterval { get; init; }

    /// <summary>
    /// Number of request messages permitted per app by this API product for the specified <c>quotaInterval</c> and <c>quotaTimeUnit</c>. For example, a <c>quota</c> of 50, for a <c>quotaInterval</c> of 12 and a <c>quotaTimeUnit</c> of hours means 50 requests are allowed every 12 hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public string? Quota { get; init; }

    /// <summary>
    /// Name displayed in the UI or developer portal to developers registering for API access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotaCounterScope")]
    public QuotaCounterScope? QuotaCounterScope { get; init; }

    /// <summary>
    /// Optional. Time unit defined for the <c>llm_quota_interval</c>. Valid values include <c>minute</c>, <c>hour</c>, <c>day</c>, or <c>month</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llmQuotaTimeUnit")]
    public string? LlmQuotaTimeUnit { get; init; }

    /// <summary>
    /// Optional. Configuration used to group Apigee proxies with payload-based operations and quotas. Unlike <c>operation_group</c>, which matches on the URL path, this grouping matches on operation identifiers extracted from the request payload (for example, JSON-RPC method and tool names). This enables fine-grained authorization and quota enforcement for protocols such as MCP where multiple operations share a single endpoint. <b>Note:</b> The <c>proxies</c> and <c>api_resources</c> settings cannot be specified for both the API product and payload operation group; otherwise the call will fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payloadOperationGroup")]
    public GoogleCloudApigeeV1PayloadOperationGroup2? PayloadOperationGroup { get; init; }

    /// <summary>
    /// Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. <b>Note:</b> The API proxy names must already exist in the specified environment as they will be validated upon creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxies")]
    public IReadOnlyList<string>? Proxies { get; init; }

    /// <summary>
    /// Internal name of the API product. Characters you can use in the name are restricted to: <c>A-Z0-9._\-$ %</c>. <b>Note:</b> The internal name cannot be edited when updating the API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Description of the API product. Include key information about the API product that is not captured by other fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the <c>quota</c> setting). <b>Note:</b> The <c>api_resources</c> setting cannot be specified for both the API product and operation group; otherwise the call will fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationGroup")]
    public GoogleCloudApigeeV1OperationGroup1? OperationGroup { get; init; }

    /// <summary>
    /// Optional. Number of LLM tokens permitted per app by this API product for the specified <c>llm_quota_interval</c> and <c>llm_quota_time_unit</c>. For example, an <c>llm_quota</c> of 50,000, for an <c>llm_quota_interval</c> of 12 and an <c>llm_quota_time_unit</c> of hours means 50,000 llm tokens are allowed to be used every 12 hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llmQuota")]
    public string? LlmQuota { get; init; }

    /// <summary>
    /// Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grpcOperationGroup")]
    public GoogleCloudApigeeV1GrpcOperationGroup2? GrpcOperationGroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
