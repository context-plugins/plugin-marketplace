using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for adding (POST) or removing (DELETE) tags on a support
/// request. The operation is surgical — only the tags listed are affected;
/// any other tags on the ticket are preserved.
/// </summary>
public record TagsRequest
{
    /// <summary>
    /// List of tags to add or remove. Customer-submitted tags are auto-prefixed with <c>customer_tag/</c>.
    /// </summary>
    [JsonPropertyName("tags")]
    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<string> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
