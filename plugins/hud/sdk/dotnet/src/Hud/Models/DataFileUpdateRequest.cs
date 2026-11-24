using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record DataFileUpdateRequest
{
    [JsonPropertyName("filename")]
    [StringLength(255, MinimumLength = 1)]
    public required string Filename { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
