using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record V1ContactsActivitiesResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<ContactActivityResource> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links Links { get; init; }

    [JsonPropertyName("meta")]
    public required Meta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
