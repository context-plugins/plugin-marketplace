using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscYoutubePlaylistRequest1
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// bundle.social does not store this value and YouTube overites it everytime so you need to pass it everytime
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// bundle.social does not store this value and YouTube overites it everytime so you need to pass it everytime
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privacyStatus")]
    public PrivacyStatus? PrivacyStatus { get; init; }

    [JsonPropertyName("playlistId")]
    public required string PlaylistId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
