using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Thread1
{
    [JsonPropertyName("threadId")]
    public required Guid ThreadId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties<object> AdditionalProperties { get; init; } = [];
}
