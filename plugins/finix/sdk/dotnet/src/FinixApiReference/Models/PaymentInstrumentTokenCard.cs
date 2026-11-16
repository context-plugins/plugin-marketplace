using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentTokenCard
{
    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The name of the bank account or card owner. This value can get truncated to comply with processor requirements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// ID of the <c>Token</c> that was returned from the tokenization client or hosted fields
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "TOKEN";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
