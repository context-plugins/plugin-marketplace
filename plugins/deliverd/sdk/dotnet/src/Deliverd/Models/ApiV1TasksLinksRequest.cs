using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1TasksLinksRequest
{
    [JsonPropertyName("targetTaskId")]
    public required Guid TargetTaskId { get; init; }

    [JsonPropertyName("kind")]
    public required Kind12 Kind { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
