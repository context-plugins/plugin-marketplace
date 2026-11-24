using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record Featurization
{
    /// <summary>
    /// The name of the schema attribute that specifies the data field to be featurized. Amazon Forecast supports the target field of the TARGET_TIME_SERIES and the RELATED_TIME_SERIES datasets. For example, for the RETAIL domain, the target is demand, and for the CUSTOM domain, the target is target_value. For more information, see howitworks-missing-values.
    /// </summary>
    [JsonPropertyName("AttributeName")]
    public required string AttributeName { get; init; }

    /// <summary>
    /// An array of one FeaturizationMethod object that specifies the feature transformation method.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FeaturizationPipeline")]
    public IReadOnlyList<FeaturizationMethod>? FeaturizationPipeline { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
