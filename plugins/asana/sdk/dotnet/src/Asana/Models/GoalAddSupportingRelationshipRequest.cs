using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalAddSupportingRelationshipRequest
{
    /// <summary>
    /// The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.
    /// </summary>
    [JsonPropertyName("supporting_resource")]
    public required string SupportingResource { get; init; }

    /// <summary>
    /// An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. <c>insert_before</c> and <c>insert_after</c> parameters cannot both be specified. Currently only supported when adding a subgoal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    /// <summary>
    /// An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. <c>insert_before</c> and <c>insert_after</c> parameters cannot both be specified. Currently only supported when adding a subgoal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    /// <summary>
    /// The weight that the supporting resource's progress will contribute to the supported goal's progress. This can only be 0 or 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contribution_weight")]
    public double? ContributionWeight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
