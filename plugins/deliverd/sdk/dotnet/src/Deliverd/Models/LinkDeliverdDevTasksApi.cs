using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record LinkDeliverdDevTasksApi
{
    [JsonPropertyName("sourceTaskId")]
    public required Guid SourceTaskId { get; init; }

    [JsonPropertyName("targetTaskId")]
    public required Guid TargetTaskId { get; init; }

    [JsonPropertyName("kind")]
    public required string Kind { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
