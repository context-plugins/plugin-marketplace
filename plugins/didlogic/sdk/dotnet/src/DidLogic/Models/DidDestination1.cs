using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

/// <summary>
/// Updated destination details
/// </summary>
public record DidDestination1
{
    /// <summary>
    /// Destination ID
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Transport type: 1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone, 12 = WebSocket, 13 = SDK (rings the account of one of your SDK tokens; set up through the SDK, not through this API)
    /// </summary>
    [JsonPropertyName("transport")]
    public required Transport Transport { get; init; }

    /// <summary>
    /// Forwarding target
    /// </summary>
    [JsonPropertyName("destination")]
    public required string Destination { get; init; }

    /// <summary>
    /// Destination priority
    /// </summary>
    [JsonPropertyName("priority")]
    public required int Priority { get; init; }

    /// <summary>
    /// Whether callhunt is enabled
    /// </summary>
    [JsonPropertyName("callhunt")]
    public required bool Callhunt { get; init; }

    /// <summary>
    /// Dialing mode of the group this destination belongs to: <c>sequence</c> tries it alone, <c>ring_all</c> dials the whole group at once, <c>random</c> picks group members in a random order. Mirrors <c>callhunt</c> (<c>ring_all</c> maps to true).
    /// </summary>
    [JsonPropertyName("dialing_type")]
    public required DialingType DialingType { get; init; }

    /// <summary>
    /// Whether destination is active
    /// </summary>
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    /// <summary>
    /// Linked AI agent ID (null when the destination is not an AI agent)
    /// </summary>
    [JsonPropertyName("ai_agent_id")]
    public required int? AiAgentId { get; init; }

    /// <summary>
    /// Linked AI agent name (null when the destination is not an AI agent)
    /// </summary>
    [JsonPropertyName("ai_agent_name")]
    public required string? AiAgentName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
