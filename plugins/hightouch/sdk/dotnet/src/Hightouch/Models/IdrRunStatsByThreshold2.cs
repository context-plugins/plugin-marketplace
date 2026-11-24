using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// If available, the stats at the end of a successful run.
/// </summary>
public record IdrRunStatsByThreshold2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("probabilistic-loose")]
    public IdrRunStats? ProbabilisticLoose { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("probabilistic-strict")]
    public IdrRunStats? ProbabilisticStrict { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deterministic")]
    public IdrRunStats? Deterministic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties<IdrRunStats> AdditionalProperties { get; init; } = [];
}
