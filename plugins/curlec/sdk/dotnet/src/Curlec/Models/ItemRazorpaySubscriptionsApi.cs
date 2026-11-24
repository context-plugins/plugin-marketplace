using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record ItemRazorpaySubscriptionsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Addon amount in paise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; } = "INR";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
