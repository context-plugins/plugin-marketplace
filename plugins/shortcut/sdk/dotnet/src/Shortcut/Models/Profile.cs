using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A group of Member profile details.
/// </summary>
public record Profile
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether the Member has been deactivated within Shortcut.
    /// </summary>
    [JsonPropertyName("deactivated")]
    public required bool Deactivated { get; init; }

    /// <summary>
    /// If Two Factor Authentication is activated for this User.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("two_factor_auth_activated")]
    public bool? TwoFactorAuthActivated { get; init; }

    /// <summary>
    /// The Member's username within the Organization.
    /// </summary>
    [JsonPropertyName("mention_name")]
    public required string MentionName { get; init; }

    /// <summary>
    /// The Member's name within the Organization.
    /// </summary>
    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    /// <summary>
    /// Whether this profile is an Agent/Bot user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_agent")]
    public bool? IsAgent { get; init; }

    /// <summary>
    /// This is the gravatar hash associated with email_address.
    /// </summary>
    [JsonPropertyName("gravatar_hash")]
    public required string? GravatarHash { get; init; }

    /// <summary>
    /// The unique identifier of the profile.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.
    /// </summary>
    [JsonPropertyName("display_icon")]
    public required Icon DisplayIcon { get; init; }

    /// <summary>
    /// A boolean indicating whether this profile is an owner at their associated organization.
    /// </summary>
    [JsonPropertyName("is_owner")]
    public required bool IsOwner { get; init; }

    /// <summary>
    /// The primary email address of the Member with the Organization.
    /// </summary>
    [JsonPropertyName("email_address")]
    public required string? EmailAddress { get; init; }
}
