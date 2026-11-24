using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsResponse4
{
    /// <summary>
    /// SIP account details
    /// </summary>
    [JsonPropertyName("sipaccount")]
    public required Sipaccount3 Sipaccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
