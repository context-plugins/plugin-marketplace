using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1AnalyticsSocialAccountRawResponse
{
    [JsonPropertyName("socialAccount")]
    public required SocialAccount SocialAccount { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<Item2> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
