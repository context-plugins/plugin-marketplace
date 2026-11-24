using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record AuthMode
{
    /// <summary>
    /// The authorization type.
    /// </summary>
    [JsonPropertyName("authType")]
    public required AuthType AuthType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
