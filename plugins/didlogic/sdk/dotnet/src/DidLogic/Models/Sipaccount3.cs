using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// SIP account details
/// </summary>
public record Sipaccount3
{
    /// <summary>
    /// Unique SIP account identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// SIP account username
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Caller ID
    /// </summary>
    [JsonPropertyName("callerid")]
    public required string Callerid { get; init; }

    /// <summary>
    /// Account label
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// SIP server host
    /// </summary>
    [JsonPropertyName("host")]
    public required string Host { get; init; }

    /// <summary>
    /// Whether number rewriting is enabled
    /// </summary>
    [JsonPropertyName("rewrite_enabled")]
    public required bool RewriteEnabled { get; init; }

    /// <summary>
    /// Rewrite condition pattern (regular expression)
    /// </summary>
    [JsonPropertyName("rewrite_cond")]
    public required string RewriteCond { get; init; }

    /// <summary>
    /// Prefix to add when rewriting numbers
    /// </summary>
    [JsonPropertyName("rewrite_prefix")]
    public required string RewritePrefix { get; init; }

    /// <summary>
    /// Whether DID info is included in SIP headers
    /// </summary>
    [JsonPropertyName("didinfo_enabled")]
    public required bool DidinfoEnabled { get; init; }

    /// <summary>
    /// Whether access is restricted by IP address
    /// </summary>
    [JsonPropertyName("ip_restrict")]
    public required bool IpRestrict { get; init; }

    /// <summary>
    /// Whether the per-call duration limit is enabled
    /// </summary>
    [JsonPropertyName("call_restrict")]
    public required bool CallRestrict { get; init; }

    /// <summary>
    /// Maximum call duration in seconds
    /// </summary>
    [JsonPropertyName("call_limit")]
    public required int CallLimit { get; init; }

    /// <summary>
    /// Whether concurrent channel limits are enabled
    /// </summary>
    [JsonPropertyName("channels_restrict")]
    public required bool ChannelsRestrict { get; init; }

    /// <summary>
    /// Maximum number of concurrent channels allowed
    /// </summary>
    [JsonPropertyName("max_channels")]
    public required int MaxChannels { get; init; }

    /// <summary>
    /// Whether maximum call cost limit is enabled
    /// </summary>
    [JsonPropertyName("cost_limit")]
    public required bool CostLimit { get; init; }

    /// <summary>
    /// Maximum allowed cost per call
    /// </summary>
    [JsonPropertyName("max_call_cost")]
    public required string MaxCallCost { get; init; }

    /// <summary>
    /// Account creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Total charges accumulated on this account
    /// </summary>
    [JsonPropertyName("charge")]
    public required string Charge { get; init; }

    /// <summary>
    /// Total talk time in seconds
    /// </summary>
    [JsonPropertyName("talk_time")]
    public required int TalkTime { get; init; }

    /// <summary>
    /// Whether account has low balance
    /// </summary>
    [JsonPropertyName("low_balance")]
    public required bool LowBalance { get; init; }

    /// <summary>
    /// Maximum total spend amount
    /// </summary>
    [JsonPropertyName("spend_limit")]
    public required string SpendLimit { get; init; }

    /// <summary>
    /// Whether spending limit is enabled
    /// </summary>
    [JsonPropertyName("spend_limit_enabled")]
    public required bool SpendLimitEnabled { get; init; }

    /// <summary>
    /// Amount available for spending
    /// </summary>
    [JsonPropertyName("available_amount")]
    public required string AvailableAmount { get; init; }

    [JsonPropertyName("call_recording_enabled")]
    public required bool CallRecordingEnabled { get; init; }

    /// <summary>
    /// List of IP addresses allowed to authenticate
    /// </summary>
    [JsonPropertyName("allowed_ips")]
    public required IReadOnlyList<object> AllowedIps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
