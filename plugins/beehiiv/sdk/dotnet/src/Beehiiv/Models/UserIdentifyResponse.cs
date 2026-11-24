using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Response containing information about the authenticated user.
/// </summary>
public record UserIdentifyResponse
{
    /// <summary>
    /// The first name of the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    public string? FirstName { get; init; }

    /// <summary>
    /// The last name of the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    public string? LastName { get; init; }

    /// <summary>
    /// The email address of the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// URL to the user's profile picture.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile_picture")]
    public string? ProfilePicture { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
