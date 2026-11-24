using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

/// <summary>
/// The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the folder automatically.
/// </summary>
public record DriveFolder
{
    [JsonPropertyName("id")]
    public required string? Id { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
