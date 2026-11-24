using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;
using GoogleCloudApiGateway.Models.Enums;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
/// </summary>
public record ApigatewayApiConfig
{
    /// <summary>
    /// Output only. Created time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. Display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Identifier. Resource name of the API Config. Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openapiDocuments")]
    public IReadOnlyList<ApigatewayApiConfigOpenApiDocument>? OpenapiDocuments { get; init; }

    /// <summary>
    /// Output only. Updated time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (<c>{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com</c>) or its full resource name (<c>projects/{PROJECT}/accounts/{UNIQUE_ID}</c>). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayServiceAccount")]
    public string? GatewayServiceAccount { get; init; }

    /// <summary>
    /// Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceConfigId")]
    public string? ServiceConfigId { get; init; }

    /// <summary>
    /// Output only. State of the API Config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1? State { get; init; }

    /// <summary>
    /// Optional. gRPC service definition files. If specified, openapi_documents must not be included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grpcServices")]
    public IReadOnlyList<ApigatewayApiConfigGrpcServiceDefinition>? GrpcServices { get; init; }

    /// <summary>
    /// Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managedServiceConfigs")]
    public IReadOnlyList<ApigatewayApiConfigFile>? ManagedServiceConfigs { get; init; }

    /// <summary>
    /// Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
