using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// A non-fatal notice that part of the request was accepted but a specific item was silently skipped. Additive and non-breaking; clients may branch on <c>code</c>.
/// </summary>
public record Warning
{
    /// <summary>
    /// Entity kind the warning is about (e.g. "caller_id", "did").
    /// </summary>
    [JsonPropertyName("resource")]
    public required string Resource { get; init; }

    /// <summary>
    /// The value the client sent that was skipped.
    /// </summary>
    [JsonPropertyName("identifier")]
    public required string Identifier { get; init; }

    /// <summary>
    /// Stable machine-readable token for the reason.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Human-readable explanation.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
