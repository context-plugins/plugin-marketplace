using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record ArticleRefreshSubmitRequest
{
    [JsonPropertyName("articleIds")]
    [MinLength(0)]
    [MaxLength(100)]
    public required IReadOnlyList<string> ArticleIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
