using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1HealthResponse
{
    [JsonPropertyName("status")]
    public string Status { get; } = "ok";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
