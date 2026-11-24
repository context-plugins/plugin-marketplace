using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// Enable or disable specific payment methods.
/// </summary>
public record Method1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card")]
    public bool? Card { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("netbanking")]
    public bool? Netbanking { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upi")]
    public bool? Upi { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wallet")]
    public bool? Wallet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
