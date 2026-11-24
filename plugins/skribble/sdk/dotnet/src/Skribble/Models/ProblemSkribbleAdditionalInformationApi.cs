using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Models;

/// <summary>
/// Error response envelope returned for all 4xx and 5xx responses with a JSON body.
/// Follows a Problem+JSON-style shape. The <c>key</c> field is optional and reserved
/// for future use.
/// </summary>
public record ProblemSkribbleAdditionalInformationApi
{
    /// <summary>
    /// URI identifying the problem category. The host of this URI depends on
    /// the environment the request was made against (e.g.
    /// <c>document-validation.skribble.com</c> and <c>document-validation.skribble.de</c>
    /// for the production regions; other environments use their respective
    /// hosts). Match on the path segment after <c>/problem/</c> rather than the full
    /// URI. Known values:
    /// <list type="bullet">
    ///   <item><description><c>https://document-validation.skribble.com/problem/problem-with-message</c> — generic error with a message</description></item>
    ///   <item><description><c>https://document-validation.skribble.com/problem/entity-not-found</c> — requested resource does not exist</description></item>
    ///   <item><description><c>https://document-validation.skribble.com/problem/feature-not-enabled</c> — a required feature is not enabled for the business</description></item>
    ///   <item><description><c>https://document-validation.skribble.com/problem/constraint-violation</c> — request violates a domain constraint</description></item>
    ///   <item><description><c>https://document-validation.skribble.com/problem/limit-exceeded</c> — a usage limit was exceeded</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("type")]
    [Format(FormatKind.Uri)]
    public required string Type { get; init; }

    /// <summary>
    /// HTTP method of the failing request.
    /// </summary>
    [JsonPropertyName("method")]
    public required string Method { get; init; }

    /// <summary>
    /// Request URI of the failing request.
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// HTTP status code, mirroring the response status line.
    /// </summary>
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    /// <summary>
    /// Optional machine-readable error key. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
