using System;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record CreditsResponse
{
    /// <summary>
    /// Credits currently remaining for your organization.
    /// </summary>
    [JsonPropertyName("remaining")]
    public required int Remaining { get; init; }

    /// <summary>
    /// Credits granted per billing cycle. Null for free-tier organizations with no active subscription.
    /// </summary>
    [JsonPropertyName("perCycle")]
    public required int? PerCycle { get; init; }

    /// <summary>
    /// When the current billing cycle ends and credits reset. Null for free-tier organizations with no active subscription.
    /// </summary>
    [JsonPropertyName("cycleResetsAt")]
    public required DateTimeOffset? CycleResetsAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
