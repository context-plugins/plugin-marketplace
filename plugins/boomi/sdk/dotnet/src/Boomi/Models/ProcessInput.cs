using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Input for creating or updating an integration process.
/// </summary>
public record ProcessInput
{
    /// <summary>
    /// Display name for the process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// ID of the folder to place the process in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folderId")]
    public string? FolderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
