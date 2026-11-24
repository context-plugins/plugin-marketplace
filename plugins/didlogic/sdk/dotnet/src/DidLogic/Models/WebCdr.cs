using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Core.Validation.Attributes;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record WebCdr
{
    /// <summary>
    /// Call start time in ISO 8601 format (UTC)
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// Call type
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// Call cost (charged/credited amount)
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// Call duration in seconds. 0 = missed call
    /// </summary>
    [JsonPropertyName("duration")]
    [Minimum(0)]
    public required int Duration { get; init; }

    /// <summary>
    /// Caller number/identifier
    /// </summary>
    [JsonPropertyName("from")]
    public required string From { get; init; }

    /// <summary>
    /// Destination number/identifier
    /// </summary>
    [JsonPropertyName("to")]
    public required string To { get; init; }

    /// <summary>
    /// Answering machine detection (AMD) verdict of an outbound call:
    /// - <c>machine</c> — AMD detected an answering machine
    /// - <c>human</c> — AMD detected a person
    /// - <c>notsure</c> — AMD ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout
    /// <para>
    /// <c>null</c> when no AMD result was recorded for the call, which is always the case for incoming calls.
    /// </para>
    /// </summary>
    [JsonPropertyName("amd_status")]
    public required string? AmdStatus { get; init; }

    /// <summary>
    /// Probability that an answering machine picked up, as a percentage from 0 to 100, as reported by the AMD detector.
    /// It is not a confidence in <c>amd_status</c>, and it carries no meaning when <c>amd_status</c> is <c>notsure</c>.
    /// <c>null</c> whenever <c>amd_status</c> is <c>null</c>.
    /// </summary>
    [JsonPropertyName("amd_score")]
    public required int? AmdScore { get; init; }

    /// <summary>
    /// How the call ended:
    /// - <c>AMD_MACHINE</c> — AMD detected an answering machine; takes precedence over the other values
    /// - <c>NORMAL_CLEARING</c> — the call was answered
    /// - <c>NO_ANSWER</c> — nobody answered, including calls the caller cancelled before an answer
    /// - <c>BUSY</c> — the called party was busy
    /// - <c>FAILED</c> — the call could not be connected
    /// <para>
    /// <c>null</c> for calls made before hangup causes were recorded, for calls whose outcome the platform did not recognise,
    /// and for API calls that never reached the destination number.
    /// </para>
    /// </summary>
    [JsonPropertyName("hangup_cause")]
    public required HangupCause? HangupCause { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
