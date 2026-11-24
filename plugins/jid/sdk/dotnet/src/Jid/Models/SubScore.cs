using System.Collections.Generic;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Core.Validation.Attributes;

namespace Jid.Models;

public record SubScore
{
    /// <summary>
    /// null when assessment is individual_or_unverified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    [Minimum(0)]
    [Maximum(100)]
    public int? Score { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reasons")]
    public IReadOnlyList<Reason>? Reasons { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
