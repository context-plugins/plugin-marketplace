using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record UpiDetails
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payer_account_type")]
    public string? PayerAccountType { get; init; }

    /// <summary>
    /// Customer UPI VPA (Virtual Payment Address). Example: user@upi.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpa")]
    public string? Vpa { get; init; }

    /// <summary>
    /// UPI flow used: collect, intent, or in_app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flow")]
    public string? Flow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
