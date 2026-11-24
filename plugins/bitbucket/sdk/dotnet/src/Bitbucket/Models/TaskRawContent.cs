using System.Text.Json.Serialization;

namespace Bitbucket.Models;

/// <summary>
/// task raw content
/// </summary>
public record TaskRawContent
{
    /// <summary>
    /// The task contents
    /// </summary>
    [JsonPropertyName("raw")]
    public required string Raw { get; init; }
}
