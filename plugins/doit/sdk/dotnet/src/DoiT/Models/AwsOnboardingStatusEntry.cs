using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AwsOnboardingStatusEntry
{
    /// <summary>
    /// Current onboarding lifecycle stage for this product line.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DoiTPerfectScaleForCommitmentsAwsApi Status { get; init; }

    /// <summary>
    /// When PerfectScale for Commitments first began tracking commitments for this commitment type. Bounds lifetime savings totals and onboarding history in the DoiT Console. Omitted or null when onboarding has not started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onboardingStartedAt")]
    public DateTimeOffset? OnboardingStartedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
