using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessMediaRequest1
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("mediaName")]
    public required string MediaName { get; init; }
}
