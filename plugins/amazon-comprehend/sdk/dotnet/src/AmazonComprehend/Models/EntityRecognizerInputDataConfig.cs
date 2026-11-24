using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record EntityRecognizerInputDataConfig
{
    /// <summary>
    /// The format of your training data: COMPREHEND_CSV: A CSV file that supplements your training documents. The CSV file contains information about the custom entities that your trained model will detect. The required format of the file depends on whether you are providing annotations or an entity list. If you use this value, you must provide your CSV file by using either the Annotations or EntityList parameters. You must provide your training documents by using the Documents parameter. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lin
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataFormat")]
    public DataFormat2? DataFormat { get; init; }

    /// <summary>
    /// The entity types in the labeled training data that Amazon Comprehend uses to train the custom entity recognizer. Any entity types that you don't specify are ignored. A maximum of 25 entity types can be used at one time to train an entity recognizer. Entity types must not contain the following invalid characters: \n (line break), \\n (escaped line break), \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab), space, and , (comma).
    /// </summary>
    [JsonPropertyName("EntityTypes")]
    public required IReadOnlyList<EntityTypesListItem> EntityTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Documents")]
    public EntityRecognizerDocuments? Documents { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Annotations")]
    public EntityRecognizerAnnotations? Annotations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityList")]
    public EntityRecognizerEntityList? EntityList { get; init; }

    /// <summary>
    /// A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. This parameter is required if you set DataFormat to AUGMENTED_MANIFEST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AugmentedManifests")]
    public IReadOnlyList<AugmentedManifestsListItem>? AugmentedManifests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
