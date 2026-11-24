using System.Text.Json.Serialization;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Models;

public record Error
{
    /// <summary>
    /// Numeric error code as defined in Mailboxlayer docs.
    /// </summary>
    [JsonPropertyName("code")]
    public required int Code { get; init; }

    /// <summary>
    /// Short machine-readable error type.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Human-readable info / suggestion for correcting the request.
    /// </summary>
    [JsonPropertyName("info")]
    public required string Info { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
