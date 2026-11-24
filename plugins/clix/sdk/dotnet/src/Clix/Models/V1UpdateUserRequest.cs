using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Request to update a user
/// </summary>
public record V1UpdateUserRequest
{
    /// <summary>
    /// User properties to update as key-value pairs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public object? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
