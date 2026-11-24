using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The Hightouch user who created or last updated a resource. Changes made with
/// an API key are attributed to the user who created the key.
/// </summary>
public record UserReference
{
    /// <summary>
    /// The user's id
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// The user's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The user's email address
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }
}
