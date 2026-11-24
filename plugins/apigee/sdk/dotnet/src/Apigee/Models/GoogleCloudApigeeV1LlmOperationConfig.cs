using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
/// </summary>
public record GoogleCloudApigeeV1LlmOperationConfig
{
    /// <summary>
    /// Required. LLM token Quota parameters to be enforced for the resources, methods, and API source &amp; LLM model combination. If none are specified, quota enforcement will not be done.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llmTokenQuota")]
    public GoogleCloudApigeeV1LlmTokenQuota1? LlmTokenQuota { get; init; }

    /// <summary>
    /// Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSource")]
    public string? ApiSource { get; init; }

    /// <summary>
    /// Required. List of resource/method/model for the API proxy to which quota will applied. <b>Note</b>: Currently, you can specify only a single resource/method/model mapping. The call will fail if more than one resource/method/model mappings are provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llmOperations")]
    public IReadOnlyList<GoogleCloudApigeeV1LlmOperation>? LlmOperations { get; init; }

    /// <summary>
    /// Optional. Custom attributes associated with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
