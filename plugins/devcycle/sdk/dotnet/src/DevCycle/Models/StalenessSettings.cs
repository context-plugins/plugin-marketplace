using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record StalenessSettings
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("released")]
    public required ReleasedStalenessSettings Released { get; init; }

    [JsonPropertyName("unmodifiedLong")]
    public required UnmodifiedLongStalenessSettings UnmodifiedLong { get; init; }

    [JsonPropertyName("unmodifiedShort")]
    public required UnmodifiedShortStalenessSettings UnmodifiedShort { get; init; }

    [JsonPropertyName("unused")]
    public required UnusedStalenessSettings Unused { get; init; }

    [JsonPropertyName("email")]
    public required StalenessEmailSettings Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
