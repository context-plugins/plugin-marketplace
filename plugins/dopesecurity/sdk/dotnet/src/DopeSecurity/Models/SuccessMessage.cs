using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// A simple message response indicating a successful operation
/// </summary>
public record SuccessMessage
{
    /// <summary>
    /// Simple success message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
