using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// Optional default date range. Required if any query uses the <c>{period_start:DateTime}</c> / <c>{period_end:DateTime}</c> placeholders. Can be changed later in Paid without re-authoring.
/// </summary>
public record CreateCustomViewRequestPeriod
{
    /// <summary>
    /// 'relative' = a rolling window ending today (set <c>unit</c> + <c>amount</c>); 'absolute' = a fixed calendar range (set <c>start</c> + <c>end</c>).
    /// </summary>
    [JsonPropertyName("kind")]
    public required CustomViewDetailPeriodKind Kind { get; init; }

    /// <summary>
    /// relative only: the unit of the rolling window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public CustomViewDetailPeriodUnit? Unit { get; init; }

    /// <summary>
    /// relative only: how many units back from today (e.g. unit 'day', amount 30 = last 30 days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// absolute only: inclusive start date (YYYY-MM-DD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public string? Start { get; init; }

    /// <summary>
    /// absolute only: inclusive end date (YYYY-MM-DD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end")]
    public string? End { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
