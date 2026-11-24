using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record BackfillResponse
{
    [JsonPropertyName("valueModelId")]
    public required Guid ValueModelId { get; init; }

    [JsonPropertyName("version")]
    public required int Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
