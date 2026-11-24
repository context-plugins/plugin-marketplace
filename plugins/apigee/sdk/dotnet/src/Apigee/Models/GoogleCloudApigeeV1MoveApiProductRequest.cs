using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Moves API product to a different space.
/// </summary>
public record GoogleCloudApigeeV1MoveApiProductRequest
{
    /// <summary>
    /// Optional. Resource ID of the space to move the API product to. If unspecified, the API product will be moved to the organization level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("space")]
    public string? Space { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
