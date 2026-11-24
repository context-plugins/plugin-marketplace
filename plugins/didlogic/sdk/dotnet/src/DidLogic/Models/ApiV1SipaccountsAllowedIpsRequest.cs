using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsAllowedIpsRequest
{
    /// <summary>
    /// Single IPv4 address in dotted-decimal form; a range (CIDR) is rejected
    /// </summary>
    [JsonPropertyName("ip")]
    public required string Ip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
