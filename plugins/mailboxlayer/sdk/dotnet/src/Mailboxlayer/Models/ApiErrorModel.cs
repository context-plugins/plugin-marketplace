using System.Text.Json.Serialization;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Models;

/// <summary>
/// Standard error payload returned by Mailboxlayer when a request fails.
/// </summary>
public record ApiErrorModel
{
    /// <summary>
    /// Always false for error responses.
    /// </summary>
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
