using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record V1PlansResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<RecurringPlanResource> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links Links { get; init; }

    [JsonPropertyName("meta")]
    public required Meta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
