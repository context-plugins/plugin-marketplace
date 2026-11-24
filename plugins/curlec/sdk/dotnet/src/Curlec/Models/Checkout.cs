using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Checkout
{
    /// <summary>
    /// Custom business name displayed on checkout.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("theme")]
    public Theme? Theme { get; init; }

    /// <summary>
    /// Enable or disable specific payment methods.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("method")]
    public Method1? Method { get; init; }

    /// <summary>
    /// Advanced checkout display configuration (blocks, sequence, preferences).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public Config? Config { get; init; }

    /// <summary>
    /// Rename partial payment labels (for localisation).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial_payment")]
    public PartialPayment? PartialPayment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
