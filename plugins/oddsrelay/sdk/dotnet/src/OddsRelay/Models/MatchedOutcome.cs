using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record MatchedOutcome
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The line, on line markets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("point")]
    public double? Point { get; init; }

    /// <summary>
    /// Best price first.
    /// </summary>
    [JsonPropertyName("back")]
    public required IReadOnlyList<Back> Back { get; init; }

    /// <summary>
    /// Lowest price first. An array of exchange offers; on <c>each-way</c> and <c>extra-place</c> an object <c>{win, place}</c> of two such arrays; absent on <c>dutching</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lay")]
    public Lay2? Lay { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
