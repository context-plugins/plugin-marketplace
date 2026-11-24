using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A list of Voice Profiles for a Brand Kit.
/// </summary>
public record VoiceProfileList
{
    /// <summary>
    /// Array of Voice Profile objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<VoiceProfile>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
