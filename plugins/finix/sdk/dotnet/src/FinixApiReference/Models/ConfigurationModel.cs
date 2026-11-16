using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Device configuration settings.
/// </summary>
public record ConfigurationModel
{
    /// <summary>
    /// The ID of the file to be displayed on the device when it is idle. Passing a value of <c>null</c> resets the device's idle image to the default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idle_image_file_id")]
    public string? IdleImageFileId { get; init; }

    /// <summary>
    /// A message to display when the terminal is idle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idle_message")]
    public string? IdleMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
