using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Error1
{
    /// <summary>
    /// The type of error.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// A human-readable description of the error.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
