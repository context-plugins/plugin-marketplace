using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Everything a session cost, split by what it was spent on.
/// <para>
/// Recorded usage, not an invoice total — promotional waivers and credits are
/// applied downstream in billing.
/// </para>
/// <para>
/// Browser time and proxy bandwidth are metered against the session's browser,
/// which outlives any single run, so they have no per-run number — only
/// <c>RunSummary.total_cost_usd</c>, the LLM (and web search) charge, does.
/// </para>
/// <para>
/// All amounts are fixed-6-decimal strings for the same reason as
/// <c>RunSummary.total_cost_usd</c>: JS clients lose precision on float.
/// </para>
/// </summary>
public record SessionCostResponse
{
    [JsonPropertyName("sessionId")]
    public required Guid SessionId { get; init; }

    [JsonPropertyName("numRuns")]
    public required int NumRuns { get; init; }

    [JsonPropertyName("llmCostUsd")]
    public required string LlmCostUsd { get; init; }

    [JsonPropertyName("searchCostUsd")]
    public required string SearchCostUsd { get; init; }

    [JsonPropertyName("browserCostUsd")]
    public required string BrowserCostUsd { get; init; }

    [JsonPropertyName("proxyCostUsd")]
    public required string ProxyCostUsd { get; init; }

    [JsonPropertyName("proxyUsedMb")]
    public required string ProxyUsedMb { get; init; }

    [JsonPropertyName("totalCostUsd")]
    public required string TotalCostUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
