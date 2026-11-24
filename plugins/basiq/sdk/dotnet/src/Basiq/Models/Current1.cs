using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Current1
{
    /// <summary>
    /// Most recent irregular income payment amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Most recent irregular income payment date
    /// </summary>
    [JsonPropertyName("date")]
    public required string Date { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
