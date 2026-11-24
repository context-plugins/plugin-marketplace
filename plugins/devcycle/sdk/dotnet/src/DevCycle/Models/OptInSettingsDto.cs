using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record OptInSettingsDto
{
    [JsonPropertyName("title")]
    [StringLength(100, MinimumLength = 1)]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public required string Description { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("imageURL")]
    public required string ImageUrl { get; init; }

    [JsonPropertyName("colors")]
    public required ColorSettingsDto Colors { get; init; }

    [JsonPropertyName("poweredByAlignment")]
    public required PoweredByAlignmentDevCycleManagementProjectsApi PoweredByAlignment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
