using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record StalenessSettingsDto
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("released")]
    public required ReleasedStalenessDto Released { get; init; }

    [JsonPropertyName("unmodifiedLong")]
    public required UnmodifiedLongStalenessDto UnmodifiedLong { get; init; }

    [JsonPropertyName("unmodifiedShort")]
    public required UnmodifiedShortStalenessDto UnmodifiedShort { get; init; }

    [JsonPropertyName("unused")]
    public required UnusedStalenessDto Unused { get; init; }

    [JsonPropertyName("email")]
    public required EmailSettingsDto Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
