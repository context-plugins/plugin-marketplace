using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record ScheduledUpgrade
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentName")]
    public string? EnvironmentName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgradeIsScheduled")]
    public bool? UpgradeIsScheduled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduledDate")]
    public DateTimeOffset? ScheduledDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registeredDate")]
    public DateTimeOffset? RegisteredDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetVersion")]
    public string? TargetVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canTenantSelectDate")]
    public bool? CanTenantSelectDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreUpgradeWindow")]
    public bool? IgnoreUpgradeWindow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
