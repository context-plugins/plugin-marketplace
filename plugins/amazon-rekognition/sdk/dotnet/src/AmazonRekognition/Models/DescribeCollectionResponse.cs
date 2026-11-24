using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DescribeCollectionResponse
{
    /// <summary>
    /// The number of faces that are indexed into the collection. To index faces into a collection, use IndexFaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceCount")]
    public int? FaceCount { get; init; }

    /// <summary>
    /// The version of the face model that's used by the collection for face detection. For more information, see Model versioning in the Amazon Rekognition Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceModelVersion")]
    public string? FaceModelVersion { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the collection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CollectionARN")]
    public string? CollectionArn { get; init; }

    /// <summary>
    /// The number of milliseconds since the Unix epoch time until the creation of the collection. The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The number of UserIDs assigned to the specified colleciton.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserCount")]
    public int? UserCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
