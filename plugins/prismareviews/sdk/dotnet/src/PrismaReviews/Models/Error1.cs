using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record Error1
{
    /// <summary>
    /// Family of the error, from the HTTP status.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// Stable, machine-readable code. Branch on this, not on <c>message</c>.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Human-readable explanation. It can change.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// <c>true</c> for 429 and 5xx: the same request can succeed later.
    /// </summary>
    [JsonPropertyName("retryable")]
    public required bool Retryable { get; init; }

    /// <summary>
    /// The <c>req_…</c> ID, also in the <c>Request-Id</c> header.
    /// </summary>
    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    /// <summary>
    /// Description of this code.
    /// </summary>
    [JsonPropertyName("docs_url")]
    [Format(FormatKind.Uri)]
    public required string DocsUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
