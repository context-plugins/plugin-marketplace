using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Jid.Core.Models;

namespace Jid.Models;

public record V1EmailCheckRequest
{
    /// <summary>
    /// The raw message headers (Show original / View source); the body is not needed.
    /// </summary>
    [JsonPropertyName("headers")]
    [MaxLength(65536)]
    public required string Headers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
