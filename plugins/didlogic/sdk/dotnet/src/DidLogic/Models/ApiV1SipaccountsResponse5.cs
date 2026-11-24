using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsResponse5
{
    /// <summary>
    /// Updated SIP account details
    /// </summary>
    [JsonPropertyName("sipaccount")]
    public required Sipaccount5 Sipaccount { get; init; }

    /// <summary>
    /// Non-fatal notices for parts of the request that were accepted but silently skipped (e.g. an unverified caller ID). Present only when non-empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public IReadOnlyList<Warning>? Warnings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
