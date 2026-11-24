using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Machine-readable 402 detail shared by run and browser creation.
/// </summary>
public record ApiKeySpendLimitDetail
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; } = "api_key_monthly_spend_limit_reached";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("cap")]
    public required double Cap { get; init; }

    [JsonPropertyName("spent")]
    public required double Spent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
