using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsRequest
{
    [JsonPropertyName("sipaccount")]
    public required Sipaccount1 Sipaccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
