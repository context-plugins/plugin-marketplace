using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
/// </summary>
public record GoogleCloudApigeeV1OperationConfig
{
    /// <summary>
    /// List of resource/method pairs for the API proxy or remote service to which quota will applied. <b>Note</b>: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operations")]
    public IReadOnlyList<GoogleCloudApigeeV1Operation>? Operations { get; init; }

    /// <summary>
    /// Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public GoogleCloudApigeeV1Quota1? Quota { get; init; }

    /// <summary>
    /// Custom attributes associated with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSource")]
    public string? ApiSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
