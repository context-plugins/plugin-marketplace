using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record AppVersion
{
    /// <summary>
    /// Increasing number on android, major.minor on iOS
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// The name of the app version
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
