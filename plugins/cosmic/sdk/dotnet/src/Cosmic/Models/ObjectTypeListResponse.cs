using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record ObjectTypeListResponse
{
    [JsonPropertyName("object_types")]
    public required IReadOnlyList<ObjectType> ObjectTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
