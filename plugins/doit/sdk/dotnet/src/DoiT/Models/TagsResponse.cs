using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Response body echoing the tags the operation actually acted on, after
/// server-side transformation (trim + lowercase + customer namespace prefix
/// where applicable).
/// </summary>
public record TagsResponse
{
    /// <summary>
    /// The tags that were stored on (POST) or removed from (DELETE) the ticket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applied_tags")]
    public IReadOnlyList<string>? AppliedTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
