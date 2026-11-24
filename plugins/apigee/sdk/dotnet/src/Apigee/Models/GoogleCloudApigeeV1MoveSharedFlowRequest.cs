using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Moves a Shared Flow to a different space.
/// </summary>
public record GoogleCloudApigeeV1MoveSharedFlowRequest
{
    /// <summary>
    /// Optional. Resource ID of the space to move the shared flow to. If unspecified, the shared flow will be moved to the organization level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("space")]
    public string? Space { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
