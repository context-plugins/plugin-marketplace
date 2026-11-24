using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record EntityRecognitionConfig
{
    /// <summary>
    /// Up to 25 entity types that the model is trained to recognize.
    /// </summary>
    [JsonPropertyName("EntityTypes")]
    public required IReadOnlyList<EntityTypesListItem> EntityTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
