using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record ReleaseSettlementQueueEntries
{
    /// <summary>
    /// Specify the action to be performed on the <c>Settlement Queue Entry</c> resources. Use the <c>RELEASE</c> action to release a list of <c>Transfer</c>, <c>Fee</c>, or <c>Reversal</c> resources, placing them into a <c>Settlement</c> as corresponding <c>Settlement Entry</c> resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public ActionEnum? Action { get; init; }

    /// <summary>
    /// An array of IDs representing the <c>Settlement Queue Entry</c> resources on which to apply the specified <c>action</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<string>? Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
