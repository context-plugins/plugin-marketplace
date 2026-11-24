using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record CreateProjectRequest
{
    /// <summary>
    /// The name of the project to create.
    /// </summary>
    [JsonPropertyName("ProjectName")]
    public required string ProjectName { get; init; }

    /// <summary>
    /// Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Feature")]
    public FeatureAmazonRekognitionProjectApi? Feature { get; init; }

    /// <summary>
    /// Specifies whether automatic retraining should be attempted for the versions of the project. Automatic retraining is done as a best effort. Required argument for Content Moderation. Applicable only to adapters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutoUpdate")]
    public AutoUpdate? AutoUpdate { get; init; }

    /// <summary>
    /// A set of tags (key-value pairs) that you want to attach to the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
