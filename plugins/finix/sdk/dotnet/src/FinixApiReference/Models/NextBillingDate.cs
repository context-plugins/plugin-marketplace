using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Details when the next <see href="/api/transfers">Transfer</see> will occur.
/// </summary>
public record NextBillingDate
{
    /// <summary>
    /// The year the next <c>Transfer</c> will occur.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public int? Year { get; init; }

    /// <summary>
    /// The month the next <c>Transfer</c> will occur.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    public int? Month { get; init; }

    /// <summary>
    /// The day the next <c>Transfer</c> will occur.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    public int? Day { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
