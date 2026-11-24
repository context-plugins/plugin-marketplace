using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// A user in Automation Hub
/// </summary>
public record User
{
    /// <summary>
    /// Unique integer identifier of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Display name of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Email address of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// Role assigned to the user in Automation Hub
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public string? Role { get; init; }

    /// <summary>
    /// Whether the user account is active
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isActive")]
    public bool? IsActive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
