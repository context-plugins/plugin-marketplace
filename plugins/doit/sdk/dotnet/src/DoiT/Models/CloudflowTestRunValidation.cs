using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Validation outcome for a test run. Returned on <c>200</c> for <c>?dryRun=true</c>, and on <c>422</c> —
/// with the problem fields populated — when a flow cannot be run.
/// </summary>
public record CloudflowTestRunValidation
{
    /// <summary>
    /// True when the flow passed every check and is runnable.
    /// </summary>
    [JsonPropertyName("valid")]
    public required bool Valid { get; init; }

    /// <summary>
    /// One entry per node that must be fixed. Present only when <c>valid</c> is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public IReadOnlyList<DetailDoiTCloudFlowApi>? Details { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public int? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryable")]
    public bool? Retryable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
