using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalRemoveSupportingRelationshipRequest
{
    /// <summary>
    /// The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal, project, or portfolio.
    /// </summary>
    [JsonPropertyName("supporting_resource")]
    public required string SupportingResource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
