using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record Destination2
{
    /// <summary>
    /// Enable callhunt (ring all). Ignored when <c>destination[dialing_type]</c> is sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callhunt")]
    public bool? Callhunt { get; init; }

    /// <summary>
    /// Dialing mode of the group this destination belongs to: <c>sequence</c> tries it alone, <c>ring_all</c> dials the whole group at once, <c>random</c> picks group members in a random order. Mirrors <c>callhunt</c> (<c>ring_all</c> maps to true). Takes precedence over <c>callhunt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dialing_type")]
    public DialingType1? DialingType { get; init; }

    /// <summary>
    /// Activate/deactivate this destination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
