using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsResponse
{
    /// <summary>
    /// List of SIP accounts
    /// </summary>
    [JsonPropertyName("sipaccounts")]
    public required IReadOnlyList<Sipaccount> Sipaccounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
