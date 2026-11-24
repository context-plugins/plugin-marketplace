using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DatasetInputDataConfig
{
    /// <summary>
    /// A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AugmentedManifests")]
    public IReadOnlyList<DatasetAugmentedManifestsListItem>? AugmentedManifests { get; init; }

    /// <summary>
    /// COMPREHEND_CSV: The data format is a two-column CSV file, where the first column contains labels and the second column contains documents. AUGMENTED_MANIFEST: The data format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataFormat")]
    public DataFormat? DataFormat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentClassifierInputDataConfig")]
    public DatasetDocumentClassifierInputDataConfig? DocumentClassifierInputDataConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityRecognizerInputDataConfig")]
    public DatasetEntityRecognizerInputDataConfig? EntityRecognizerInputDataConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
