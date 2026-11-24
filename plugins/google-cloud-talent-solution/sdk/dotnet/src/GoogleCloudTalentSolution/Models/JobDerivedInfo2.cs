using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Output only. Derived details about the job posting.
/// </summary>
public record JobDerivedInfo2
{
    /// <summary>
    /// Job categories derived from Job.title and Job.description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobCategories")]
    public IReadOnlyList<JobCategory>? JobCategories { get; init; }

    /// <summary>
    /// Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in the same order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<Location>? Locations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
