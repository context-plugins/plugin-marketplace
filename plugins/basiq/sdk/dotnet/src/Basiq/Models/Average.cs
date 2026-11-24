using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Average
{
    /// <summary>
    /// Average transaction amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction")]
    public string? Transaction { get; init; }

    /// <summary>
    /// Average monthly amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    public string? Month { get; init; }

    /// <summary>
    /// Median transaction amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medianTransaction")]
    public string? MedianTransaction { get; init; }

    /// <summary>
    /// Median monthly amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medianMonth")]
    public string? MedianMonth { get; init; }

    /// <summary>
    /// Ongoing month's average amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ongoingMonth")]
    public string? OngoingMonth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
