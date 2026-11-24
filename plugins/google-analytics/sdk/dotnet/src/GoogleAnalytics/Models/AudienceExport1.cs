using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// Configuration data about AudienceExport being queried. Returned to help interpret the audience rows in this response. For example, the dimensions in this AudienceExport correspond to the columns in the AudienceRows.
/// </summary>
public record AudienceExport1
{
    /// <summary>
    /// Output only. The percentage completed for this audience export ranging between 0 to 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentageCompleted")]
    public double? PercentageCompleted { get; init; }

    /// <summary>
    /// Output only. The descriptive display name for this audience. For example, "Purchasers".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audienceDisplayName")]
    public string? AudienceDisplayName { get; init; }

    /// <summary>
    /// Output only. The total number of rows in the AudienceExport result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    /// <summary>
    /// Required. The dimensions requested and displayed in the query response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<V1BetaAudienceDimension>? Dimensions { get; init; }

    /// <summary>
    /// Required. The audience resource name. This resource name identifies the audience being listed and is shared between the Analytics Data &amp; Admin APIs. Format: <c>properties/{property}/audiences/{audience}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audience")]
    public string? Audience { get; init; }

    /// <summary>
    /// Output only. The current state for this AudienceExport.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Output only. Error message is populated when an audience export fails during creation. A common reason for such a failure is quota exhaustion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorMessage")]
    public string? ErrorMessage { get; init; }

    /// <summary>
    /// Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is based on activity from the <c>CREATING</c> state, this tokens charged will be fixed once an AudienceExport enters the <c>ACTIVE</c> or <c>FAILED</c> states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationQuotaTokensCharged")]
    public int? CreationQuotaTokensCharged { get; init; }

    /// <summary>
    /// Output only. The time when CreateAudienceExport was called and the AudienceExport began the <c>CREATING</c> state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beginCreatingTime")]
    public string? BeginCreatingTime { get; init; }

    /// <summary>
    /// Output only. Identifier. The audience export resource name assigned during creation. This resource name identifies this <c>AudienceExport</c>. Format: <c>properties/{property}/audienceExports/{audience_export}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
