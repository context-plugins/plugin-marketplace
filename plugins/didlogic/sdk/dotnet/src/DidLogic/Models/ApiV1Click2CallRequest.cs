using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record ApiV1Click2CallRequest
{
    /// <summary>
    /// Type of the agent leg. <c>sip_account</c> rings one of your SIP accounts; <c>stream</c> connects your own WebSocket endpoint first, where the account allows it.
    /// </summary>
    [JsonPropertyName("a_type")]
    public required AType AType { get; init; }

    /// <summary>
    /// For <c>sip_account</c>, the five-digit SIP account name from sipaccounts_index to ring first. For <c>stream</c>, the public <c>wss://</c> URL of your endpoint, at most 2048 characters, dialled exactly as given. Your endpoint is sent <c>start</c> as soon as the socket opens and the leg is answered; the destination is dialled after that, and its pickup arrives as <c>answered</c>.
    /// </summary>
    [JsonPropertyName("a_endpoint")]
    public required string AEndpoint { get; init; }

    /// <summary>
    /// Destination number in E.164, with or without the leading <c>+</c>.
    /// </summary>
    [JsonPropertyName("b_number")]
    public required string BNumber { get; init; }

    /// <summary>
    /// Optional <c>https</c> URL on a public host, at most 255 characters. Every transition of this call is POSTed to it — see the description above.
    /// </summary>
    [JsonPropertyName("callback_url")]
    public required string CallbackUrl { get; init; }

    /// <summary>
    /// Optional label of your own, echoed back on every surface that reports this call. At most 64 characters of <c>A-Z</c>, <c>a-z</c>, <c>0-9</c>, <c>_</c> or <c>-</c>. Not checked for uniqueness and never used to address the call.
    /// </summary>
    [JsonPropertyName("client_call_id")]
    public required string ClientCallId { get; init; }

    /// <summary>
    /// Optional caller ID shown on the agent leg instead of <c>b_number</c>: E.164, at most 15 digits, with or without the leading <c>+</c>. When present it must be valid — <c>null</c> or an empty string is refused, never ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("a_cli")]
    public string? ACli { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
