using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Sipaccount4
{
    /// <summary>
    /// Account label/name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// SIP password
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Caller ID to display on outbound calls
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callerid")]
    public string? Callerid { get; init; }

    /// <summary>
    /// Enable number rewriting
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rewrite_enabled")]
    public bool? RewriteEnabled { get; init; }

    /// <summary>
    /// Rewrite condition pattern (regular expression)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rewrite_cond")]
    public string? RewriteCond { get; init; }

    /// <summary>
    /// Prefix to add when rewriting numbers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rewrite_prefix")]
    public string? RewritePrefix { get; init; }

    /// <summary>
    /// Enable DID info in SIP headers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("didinfo_enabled")]
    public bool? DidinfoEnabled { get; init; }

    /// <summary>
    /// Restrict access by IP address (requires allowed IPs)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_restrict")]
    public bool? IpRestrict { get; init; }

    /// <summary>
    /// Enable the per-call duration limit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("call_restrict")]
    public bool? CallRestrict { get; init; }

    /// <summary>
    /// Maximum call duration in seconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("call_limit")]
    public int? CallLimit { get; init; }

    /// <summary>
    /// Enable concurrent channel limits
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channels_restrict")]
    public bool? ChannelsRestrict { get; init; }

    /// <summary>
    /// Maximum concurrent channels allowed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_channels")]
    public int? MaxChannels { get; init; }

    /// <summary>
    /// Enable maximum call cost limit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost_limit")]
    public bool? CostLimit { get; init; }

    /// <summary>
    /// Maximum allowed cost per call in cents
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_call_cost")]
    public int? MaxCallCost { get; init; }

    /// <summary>
    /// Enable total spending limit. Switching a disabled limit back on restarts it: the full limit is available again, counted from now
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spend_limit_enabled")]
    public bool? SpendLimitEnabled { get; init; }

    /// <summary>
    /// Maximum total spend amount in cents
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spend_limit")]
    public int? SpendLimit { get; init; }

    /// <summary>
    /// Amount available for spend limit reset in cents
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reset_available_amount")]
    public int? ResetAvailableAmount { get; init; }

    /// <summary>
    /// Enable or disable recording of outbound calls made via a selected SIP account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("call_recording_enabled")]
    public bool? CallRecordingEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
