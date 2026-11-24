using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Action context are all the relevant details for the action.
/// </summary>
public record GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext
{
    /// <summary>
    /// Documentation link for the action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentationLink")]
    public string? DocumentationLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
