using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// View model for representing a profile. A profile lets you preserve the login state between sessions.
/// <para>
/// We recommend that you create a separate profile for each user of your app.
/// You can assign a user_id to each profile to easily identify which user the profile belongs to.
/// </para>
/// </summary>
public record ProfileView
{
    /// <summary>
    /// Unique identifier for the profile
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Your internal user identifier for this profile. Use this to associate a profile with a user in your system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public UserId? UserId { get; init; }

    /// <summary>
    /// Optional name for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name? Name { get; init; }

    /// <summary>
    /// Timestamp when the profile was last used
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUsedAt")]
    public LastUsedAt? LastUsedAt { get; init; }

    /// <summary>
    /// Timestamp when the profile was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Timestamp when the profile was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// List of domain URLs that have cookies stored for this profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cookieDomains")]
    public CookieDomains? CookieDomains { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
