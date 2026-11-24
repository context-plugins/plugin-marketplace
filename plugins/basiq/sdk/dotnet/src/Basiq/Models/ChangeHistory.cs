using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Amount classified as spent that month (repeated each month of data)
/// </summary>
public record ChangeHistory
{
    /// <summary>
    /// Amount of expense that period
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Month expense relates
    /// </summary>
    [JsonPropertyName("date")]
    public required string Date { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
