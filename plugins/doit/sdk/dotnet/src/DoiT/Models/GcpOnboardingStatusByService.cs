using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Onboarding status entry for one product line. When <c>done</c>, inventory and recommendations for that commitment type are available.
/// </summary>
public record GcpOnboardingStatusByService
{
    /// <summary>
    /// Current onboarding lifecycle stage for this product line.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDoiTPerfectScaleForCommitmentsGcpApi Status { get; init; }

    /// <summary>
    /// When PerfectScale for Commitments first began tracking commitments for this commitment type. Bounds lifetime savings totals and onboarding history in the DoiT Console. Omitted or null when onboarding has not started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onboardingStartedAt")]
    public DateTimeOffset? OnboardingStartedAt { get; init; }

    /// <summary>
    /// Product line this onboarding status belongs to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service1DoiTPerfectScaleForCommitmentsGcpApi Service { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
