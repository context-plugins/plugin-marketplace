using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DatasetEntityRecognizerInputDataConfig
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Annotations")]
    public DatasetEntityRecognizerAnnotations? Annotations { get; init; }

    [JsonPropertyName("Documents")]
    public required DatasetEntityRecognizerDocuments Documents { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityList")]
    public DatasetEntityRecognizerEntityList? EntityList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
