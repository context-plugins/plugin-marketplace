using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Models.Enums;

namespace CallNode.Models;

public record Call
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callId")]
    public string? CallId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public CallStatus? Status { get; init; }

    /// <summary>
    /// Plus sign followed by 7–15 digits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    [RegularExpression("^\\+[1-9]\\d{6,14}$")]
    public string? From { get; init; }

    /// <summary>
    /// The destination as requested — an E.164 number, a <c>sip:</c> URI, or an extension (trunk form).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    public string? To { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originatedAt")]
    public DateTimeOffset? OriginatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answeredAt")]
    public DateTimeOffset? AnsweredAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endedAt")]
    public DateTimeOffset? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationSecs")]
    public int? DurationSecs { get; init; }

    /// <summary>
    /// Decimal string, e.g. "0.04".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costUsd")]
    public string? CostUsd { get; init; }

    /// <summary>
    /// Why the call failed. <c>no_answer</c>, <c>busy</c>, <c>carrier_rejected</c>,
    /// <c>invalid_number</c>, <c>cancelled</c>, <c>max_duration_exceeded</c>, or — for SIP
    /// destinations — <c>invalid_destination</c>, <c>endpoint_unreachable</c>,
    /// <c>endpoint_rejected</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureCode")]
    public string? FailureCode { get; init; }

    /// <summary>
    /// The trunk used for this call. Null for PSTN calls and direct-URI SIP calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipTrunkId")]
    public string? SipTrunkId { get; init; }

    /// <summary>
    /// The normalized SIP URI actually dialed. Null for PSTN calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipUri")]
    public string? SipUri { get; init; }

    /// <summary>
    /// True when the call was placed outside the 8am–9pm window to a number in the account's Phone Book, so no tcpaOverride was needed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneBookExempt")]
    public bool? PhoneBookExempt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
