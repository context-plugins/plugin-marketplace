using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record RecapTopic
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("bullet_points")]
    public required IReadOnlyList<RecapBulletPoint> BulletPoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
