using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Filter on job compensation type and amount.
/// </summary>
public record CompensationFilter
{
    /// <summary>
    /// Compensation range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("range")]
    public CompensationRange? Range { get; init; }

    /// <summary>
    /// If set to true, jobs with unspecified compensation range fields are included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeJobsWithUnspecifiedCompensationRange")]
    public bool? IncludeJobsWithUnspecifiedCompensationRange { get; init; }

    /// <summary>
    /// Required. Specify desired <c>base compensation entry's</c> CompensationInfo.CompensationUnit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("units")]
    public IReadOnlyList<Unit1>? Units { get; init; }

    /// <summary>
    /// Required. Type of filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
