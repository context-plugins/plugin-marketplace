using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Binds the payload operations in an API proxy with the associated quota enforcement.
/// </summary>
public record GoogleCloudApigeeV1PayloadOperationConfig
{
    /// <summary>
    /// Required. Name of the API proxy with which the payload operations and quota are associated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSource")]
    public string? ApiSource { get; init; }

    /// <summary>
    /// Optional. Custom attributes associated with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Optional. Quota parameters to be enforced for the operations and API source combination. If none are specified, quota enforcement will not be done unless a quota is defined at the API product level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public GoogleCloudApigeeV1Quota2? Quota { get; init; }

    /// <summary>
    /// Required. List of payload operations for the API proxy to which quota will be applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operations")]
    public IReadOnlyList<GoogleCloudApigeeV1PayloadOperation>? Operations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
