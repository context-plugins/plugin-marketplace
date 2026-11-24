using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

/// <summary>
/// View model for representing a browser session in list views.
/// </summary>
public record BrowserSessionItemView
{
    /// <summary>
    /// Unique identifier for the session
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Current status of the session (active/stopped)
    /// </summary>
    [JsonPropertyName("status")]
    public required BrowserSessionStatus2 Status { get; init; }

    /// <summary>
    /// URL where the browser can be viewed live in real-time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("liveUrl")]
    public LiveUrl? LiveUrl { get; init; }

    /// <summary>
    /// Chrome DevTools Protocol URL for browser automation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cdpUrl")]
    public CdpUrl? CdpUrl { get; init; }

    /// <summary>
    /// Timestamp when the session will timeout
    /// </summary>
    [JsonPropertyName("timeoutAt")]
    public required DateTimeOffset TimeoutAt { get; init; }

    /// <summary>
    /// Timestamp when the session was created and started
    /// </summary>
    [JsonPropertyName("startedAt")]
    public required DateTimeOffset StartedAt { get; init; }

    /// <summary>
    /// Timestamp when the session was stopped (None if still active)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("finishedAt")]
    public FinishedAt? FinishedAt { get; init; }

    /// <summary>
    /// Amount of proxy data used in MB
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyUsedMb")]
    [RegularExpression("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")]
    public string? ProxyUsedMb { get; init; } = "0";

    /// <summary>
    /// Cost of proxy usage in USD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyCost")]
    [RegularExpression("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")]
    public string? ProxyCost { get; init; } = "0";

    /// <summary>
    /// Cost of browser session hosting in USD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("browserCost")]
    [RegularExpression("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")]
    public string? BrowserCost { get; init; } = "0";

    /// <summary>
    /// ID of the agent session that created this browser (None for standalone BaaS sessions)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentSessionId")]
    public AgentSessionId? AgentSessionId { get; init; }

    /// <summary>
    /// Presigned URL to download the session recording. Only populated on <c>GET /api/v2/browsers/{id}</c>; always <c>null</c> in list responses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordingUrl")]
    public RecordingUrl1? RecordingUrl { get; init; }

    /// <summary>
    /// Caller-supplied labels set when the browser was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, string>? Metadata { get; init; }

    /// <summary>
    /// Extensions installed in the browser, in the order of <c>extensionIds</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extensions")]
    public IReadOnlyList<BrowserExtensionView>? Extensions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
