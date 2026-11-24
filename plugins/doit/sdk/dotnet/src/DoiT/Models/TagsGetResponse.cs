using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Response body for GET /support/v1/tickets/{ticketId}/tags. Contains
/// the current tags visible to the caller.
/// </summary>
public record TagsGetResponse
{
    /// <summary>
    /// Ticket tags, filtered by caller type. DoiT employee (doer) callers
    /// receive the full tag set verbatim, including internal namespaces
    /// (e.g. <c>tier/*</c>, <c>synapse_*</c>). Customer callers receive only tags
    /// under the <c>customer_tag/</c> namespace, with that prefix stripped.
    /// Always present; empty array when the caller has no visible tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
