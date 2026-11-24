using System.Text.Json.Serialization;
using Bitbucket.Core.Validation.Attributes;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// The status of an import or export job
/// </summary>
public record IssueJobStatus
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The status of the import/export job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusBitbucketIssueTrackerApi? Status { get; init; }

    /// <summary>
    /// The phase of the import/export job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public string? Phase { get; init; }

    /// <summary>
    /// The total number of issues being imported/exported
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; }

    /// <summary>
    /// The total number of issues already imported/exported
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    /// <summary>
    /// The percentage of issues already imported/exported
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pct")]
    [Minimum(0.0)]
    [Maximum(100.0)]
    public double? Pct { get; init; }
}
