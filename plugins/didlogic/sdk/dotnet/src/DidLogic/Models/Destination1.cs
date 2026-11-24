using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record Destination1
{
    /// <summary>
    /// Forwarding target (SIP URI or phone number). Required for every transport except Webphone (10), which rings your webphone and takes no address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public string? Destination { get; init; }

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
    /// Activate this destination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    /// <summary>
    /// Transport type (1=SIP URI, 4=Phone number, 5=SIP device, 10=Webphone, 12=WebSocket). 12 requires an account enabled for voice streaming.
    /// </summary>
    [JsonPropertyName("transport")]
    public required Transport1 Transport { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
