using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Request to create a new user
/// </summary>
public record V1CreateUserRequest
{
    /// <summary>
    /// Unique identifier for the user in your project
    /// </summary>
    [JsonPropertyName("project_user_id")]
    public required string ProjectUserId { get; init; }

    /// <summary>
    /// User properties as key-value pairs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public object? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
