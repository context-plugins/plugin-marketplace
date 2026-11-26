using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

public record RestorePeriod
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    public DateTimeOffset? From { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    public DateTimeOffset? To { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("correspondingApplicationPackageVersion")]
    public string? CorrespondingApplicationPackageVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
