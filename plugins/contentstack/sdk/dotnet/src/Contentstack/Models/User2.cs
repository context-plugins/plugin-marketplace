using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Core.Validation;
using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Models;

/// <summary>
/// User credential object.
/// </summary>
public record User2
{
    /// <summary>
    /// The user's email address.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// The user's account password.
    /// </summary>
    [JsonPropertyName("password")]
    public required string Password { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
