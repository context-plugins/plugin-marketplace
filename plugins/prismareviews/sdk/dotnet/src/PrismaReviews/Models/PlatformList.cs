using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record PlatformList
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Platform> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
