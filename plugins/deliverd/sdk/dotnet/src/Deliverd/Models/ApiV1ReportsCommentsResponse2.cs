using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsCommentsResponse2
{
    [JsonPropertyName("status")]
    public string Status { get; } = "retracted";

    [JsonPropertyName("threadId")]
    public required Guid ThreadId { get; init; }

    [JsonPropertyName("threadRetracted")]
    public required bool ThreadRetracted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
