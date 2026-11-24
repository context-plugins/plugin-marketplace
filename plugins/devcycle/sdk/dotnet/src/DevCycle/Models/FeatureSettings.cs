using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureSettings
{
    [JsonPropertyName("publicName")]
    [StringLength(100, MinimumLength = 1)]
    public required string PublicName { get; init; }

    [JsonPropertyName("publicDescription")]
    [MaxLength(1000)]
    public required string PublicDescription { get; init; }

    [JsonPropertyName("optInEnabled")]
    public required bool OptInEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
