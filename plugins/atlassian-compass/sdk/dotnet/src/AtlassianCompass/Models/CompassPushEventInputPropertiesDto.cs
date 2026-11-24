using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the push event.
/// </summary>
public record CompassPushEventInputPropertiesDto
{
    /// <summary>
    /// The ID of the push to event.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the branch being pushed to.
    /// </summary>
    [JsonPropertyName("branchName")]
    public required string BranchName { get; init; }

    /// <summary>
    /// The author who made the push.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public CompassPushEventAuthorInputDto? Author { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
