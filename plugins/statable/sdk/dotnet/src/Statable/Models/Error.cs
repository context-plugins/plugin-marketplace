using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation;
using Statable.Core.Validation.Attributes;
using Statable.Models.Enums;

namespace Statable.Models;

public record Error
{
    /// <summary>
    /// One sentence on what to do next. Present only on the errors a client meets while exploring (<c>not_found</c>, <c>method_not_allowed</c>); other errors omit it. Human-readable — do not branch on it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hint")]
    public string? Hint { get; init; }

    /// <summary>
    /// Where to read more. Present together with <c>hint</c>, omitted otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docs")]
    [Format(FormatKind.Uri)]
    public string? Docs { get; init; }

    /// <summary>
    /// Same value as the X-Request-ID response header, repeated here because clients log bodies more often than headers. Quote it in a support request. Present on every error, including the <c>not_found</c> and <c>method_not_allowed</c> answers for a path or method that has no route.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request_id")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Human-readable detail. May be reworded — do not branch on it.
    /// </summary>
    [JsonPropertyName("error")]
    public required string ErrorValue { get; init; }

    /// <summary>
    /// Stable machine-readable slug (contract — never changes). The <c>ambiguous_domain</c> code is emitted only by the MCP tools (when a <c>site</c> domain matches more than one stored site), not by /query.
    /// </summary>
    [JsonPropertyName("code")]
    public required Code Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
