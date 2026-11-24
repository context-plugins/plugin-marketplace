using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
/// </summary>
public record JobEvent
{
    /// <summary>
    /// Required. The job name(s) associated with this event. For example, if this is an impression event, this field contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the identifier of the viewed job. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for example, "projects/foo/tenants/bar/jobs/baz".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobs")]
    public IReadOnlyList<string>? Jobs { get; init; }

    /// <summary>
    /// Required. The type of the event (see JobEventType).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type2? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
