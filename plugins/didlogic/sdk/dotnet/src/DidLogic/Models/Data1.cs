using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

/// <summary>
/// The Click2Call call resource
/// </summary>
public record Data1
{
    /// <summary>
    /// Call ID (26-character ULID)
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// How far the call got. <c>agent_ringing</c> may be skipped — see the description above.
    /// </summary>
    [JsonPropertyName("state")]
    public required State1 State { get; init; }

    /// <summary>
    /// Why the call ended. <c>null</c> while the call is live and on a normal end.
    /// </summary>
    [JsonPropertyName("reason")]
    public required Reason? Reason { get; init; }

    /// <summary>
    /// Type of the agent leg. Always <c>sip_account</c> in v1.
    /// </summary>
    [JsonPropertyName("a_type")]
    public required string AType { get; init; }

    /// <summary>
    /// The SIP account that was rung first
    /// </summary>
    [JsonPropertyName("a_endpoint")]
    public required string AEndpoint { get; init; }

    /// <summary>
    /// Destination number, digits only
    /// </summary>
    [JsonPropertyName("b_number")]
    public required string BNumber { get; init; }

    /// <summary>
    /// Always <c>null</c> in v1
    /// </summary>
    [JsonPropertyName("b_cli")]
    public required string? BCli { get; init; }

    /// <summary>
    /// When the call was placed. The 12-hour retention window runs from here.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// When the agent leg started ringing. Best-effort: <c>null</c> when the phone never reported the ring, not only when it never rang.
    /// </summary>
    [JsonPropertyName("agent_ringing_at")]
    public required string? AgentRingingAt { get; init; }

    /// <summary>
    /// When the agent leg answered
    /// </summary>
    [JsonPropertyName("agent_answered_at")]
    public required string? AgentAnsweredAt { get; init; }

    /// <summary>
    /// When the destination was dialled
    /// </summary>
    [JsonPropertyName("customer_ringing_at")]
    public required string? CustomerRingingAt { get; init; }

    /// <summary>
    /// When the two legs were bridged
    /// </summary>
    [JsonPropertyName("bridged_at")]
    public required string? BridgedAt { get; init; }

    /// <summary>
    /// When the call ended
    /// </summary>
    [JsonPropertyName("ended_at")]
    public required string? EndedAt { get; init; }

    /// <summary>
    /// Whole life of the call in seconds, ringing included. Not the billed time.
    /// </summary>
    [JsonPropertyName("duration")]
    public required int? Duration { get; init; }

    /// <summary>
    /// Total cost in dollars, four decimals
    /// </summary>
    [JsonPropertyName("cost")]
    public required string? Cost { get; init; }

    /// <summary>
    /// When the billed record was committed. <c>null</c> until then, and until it is set <c>cost</c> may still be <c>null</c>.
    /// </summary>
    [JsonPropertyName("finalized_at")]
    public required string? FinalizedAt { get; init; }

    /// <summary>
    /// Where the recording of the call can be downloaded. <c>null</c> when the call was not recorded, and <c>null</c> on a call that has not settled yet. By default the link is signed and expires one hour after it was minted; each read of the call mints a fresh one, and <c>GET /api/v1/calls/recording/{callid}</c> also gives one. If the account has permanent recording links enabled (on request through your account manager or support), the field holds a permanent <c>/api/v1/recordings/{user_id}/{token}</c> URL instead. It does not expire while the recording is retained and the option stays on.
    /// </summary>
    [JsonPropertyName("recording_url")]
    public required string? RecordingUrl { get; init; }

    /// <summary>
    /// The label you supplied when placing the call, echoed back unchanged. <c>null</c> when none was supplied. Carried on every webhook for this call.
    /// </summary>
    [JsonPropertyName("client_call_id")]
    public required string? ClientCallId { get; init; }

    /// <summary>
    /// The caller ID the agent leg was presented with, digits only: the <c>a_cli</c> you supplied, or <c>b_number</c> when you supplied none. Carried on every webhook for this call.
    /// </summary>
    [JsonPropertyName("a_cli")]
    public required string? ACli { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
