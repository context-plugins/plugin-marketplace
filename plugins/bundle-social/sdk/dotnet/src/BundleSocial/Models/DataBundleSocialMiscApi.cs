using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

/// <summary>
/// User data if exists, null otherwise
/// </summary>
public record DataBundleSocialMiscApi
{
    /// <summary>
    /// Instagram User ID
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Instagram username
    /// </summary>
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    /// <summary>
    /// Number of followers
    /// </summary>
    [JsonPropertyName("followers_count")]
    public required double FollowersCount { get; init; }

    /// <summary>
    /// Number of media posts
    /// </summary>
    [JsonPropertyName("media_count")]
    public required double MediaCount { get; init; }

    /// <summary>
    /// Profile picture URL if available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile_picture_url")]
    [Format(FormatKind.Uri)]
    public string? ProfilePictureUrl { get; init; }

    /// <summary>
    /// User biography if available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("biography")]
    public string? Biography { get; init; }

    /// <summary>
    /// Full name if available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Up to 12 recent public media items
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media")]
    public Media? Media { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
