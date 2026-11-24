using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateCollectionResponse
{
    /// <summary>
    /// HTTP status code indicating the result of the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusCode")]
    public int? StatusCode { get; init; }

    /// <summary>
    /// Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CollectionArn")]
    public string? CollectionArn { get; init; }

    /// <summary>
    /// Version number of the face detection model associated with the collection you are creating.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceModelVersion")]
    public string? FaceModelVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
