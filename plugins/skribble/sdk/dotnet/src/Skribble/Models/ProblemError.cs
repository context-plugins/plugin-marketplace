using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Models;

/// <summary>
/// Error response envelope returned for all 4xx and 5xx responses with a JSON body.
/// Follows a Problem+JSON-style shape. The <c>key</c> field is optional and only present
/// for errors that carry a machine-readable code.
/// </summary>
public record ProblemError
{
    /// <summary>
    /// URI identifying the problem category. The host of this URI depends on
    /// the environment the request was made against (e.g. <c>api.skribble.com</c>
    /// and <c>api.skribble.de</c> for the production regions; other environments
    /// use their respective hosts). Match on the path segment after <c>/problem/</c>
    /// rather than the full URI. Known values:
    /// <list type="bullet">
    ///   <item><description><c>https://api.skribble.com/problem/problem-with-message</c> — generic error with a message</description></item>
    ///   <item><description><c>https://api.skribble.com/problem/entity-not-found</c> — requested resource does not exist</description></item>
    ///   <item><description><c>https://api.skribble.com/problem/feature-not-enabled</c> — a required feature is not enabled for the business</description></item>
    ///   <item><description><c>https://api.skribble.com/problem/constraint-violation</c> — request violates a domain constraint</description></item>
    ///   <item><description><c>https://api.skribble.com/problem/parameterized</c> — parameterized error with details</description></item>
    ///   <item><description><c>https://api.skribble.com/problem/limit-exceeded</c> — a usage limit was exceeded</description></item>
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
    /// Optional machine-readable error key. Present for a subset of errors that carry
    /// a stable code. Prefer matching on this field over parsing <c>message</c>, which is
    /// not part of the stable contract.
    /// <para>
    /// Known keys, grouped by category:
    /// </para>
    /// <para>
    /// Authentication (<c>403</c>):
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>error.auth.token_expired</c>: the access token has expired</description></item>
    ///   <item><description><c>error.auth.token_invalid</c>: the access token is malformed or otherwise invalid</description></item>
    ///   <item><description><c>error.auth.credentials_invalid</c>: the supplied credentials were rejected</description></item>
    /// </list>
    /// <para>
    /// Rate limiting (<c>429</c>):
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>error.rate_limit.exceeded</c>: a generic rate limit was exceeded</description></item>
    ///   <item><description><c>error.rate_limit.reminder</c>: the per-signature-request reminder limit was exceeded</description></item>
    /// </list>
    /// <para>
    /// File upload / attachment (<c>400</c>):
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>file.attachment.unsupported</c>: the uploaded attachment type is not supported</description></item>
    ///   <item><description><c>file.malware.detected</c>: malware was detected in the uploaded file</description></item>
    /// </list>
    /// <para>
    /// PDF processing (<c>400</c>):
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>file.pdf.general_error</c>: the PDF could not be loaded (corrupt or unreadable)</description></item>
    ///   <item><description><c>file.pdf.encryption.unknown_password</c>: the PDF is encrypted with an unknown password</description></item>
    ///   <item><description><c>file.pdf.encryption.no_changes_allowed</c>: the PDF's signature permissions (DocMDP) do not allow the required changes</description></item>
    ///   <item><description><c>file.pdf.encryption.unknown_permissions</c>: the PDF is encrypted with an unknown permissions type</description></item>
    ///   <item><description><c>file.pdf.signature_verification.failed</c>: verification of an existing PDF signature failed</description></item>
    /// </list>
    /// <para>
    /// Signature request (<c>400</c>):
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>error.sr.last_document_cannot_be_removed</c>: the request would remove the only remaining document from the signature request; an SR must keep at least one document</description></item>
    /// </list>
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
