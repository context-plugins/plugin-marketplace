using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1PostHistoryImportPostsRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("postIds")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<string> PostIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
