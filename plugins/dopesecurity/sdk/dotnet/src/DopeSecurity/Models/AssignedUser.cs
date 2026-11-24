using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// A user assigned to a policy
/// </summary>
public record AssignedUser
{
    /// <summary>
    /// Email address of the assigned user
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    /// <summary>
    /// Display name of the assigned user
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
