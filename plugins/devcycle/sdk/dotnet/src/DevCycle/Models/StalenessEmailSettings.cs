using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record StalenessEmailSettings
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("frequency")]
    public required Frequency Frequency { get; init; }

    [JsonPropertyName("users")]
    public required IReadOnlyList<string> Users { get; init; }

    [JsonPropertyName("lastNotification")]
    public required DateTimeOffset LastNotification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
