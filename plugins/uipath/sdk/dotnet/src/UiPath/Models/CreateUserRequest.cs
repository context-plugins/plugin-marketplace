using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// Request payload for creating a new user account
/// </summary>
public record CreateUserRequest
{
    /// <summary>
    /// Email address for the new user account
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Display name for the new user
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Surname of the new user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surname")]
    public string? Surname { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
