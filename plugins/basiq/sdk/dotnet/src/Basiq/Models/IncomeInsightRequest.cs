using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record IncomeInsightRequest
{
    /// <summary>
    /// Income range to verify
    /// </summary>
    [JsonPropertyName("income")]
    public required Income Income { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
