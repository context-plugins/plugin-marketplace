using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

/// <summary>
/// ASN WHOIS v2 (/v2.0/asn-whois) — pass-through of ipgeolocation ASN data.
/// </summary>
public record AsnWhoisResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asn")]
    public AsnInfo? Asn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
