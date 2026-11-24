using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// Request payload for adding a new user to Automation Hub
/// </summary>
public record AddUserRequest
{
    /// <summary>
    /// Email address of the user to add
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Role to assign to the user
    /// </summary>
    [JsonPropertyName("role")]
    public required string Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
