using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// A group assigned to a policy
/// </summary>
public record AssignedGroup
{
    /// <summary>
    /// Email address of the assigned group
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    /// <summary>
    /// Display name of the assigned group
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Number of members in the group
    /// </summary>
    [JsonPropertyName("membersCount")]
    public required int MembersCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
