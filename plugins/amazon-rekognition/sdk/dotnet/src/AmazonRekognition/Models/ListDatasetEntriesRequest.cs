using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ListDatasetEntriesRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the dataset that you want to use.
    /// </summary>
    [JsonPropertyName("DatasetArn")]
    public required string DatasetArn { get; init; }

    /// <summary>
    /// Specifies a label filter for the response. The response includes an entry only if one or more of the labels in ContainsLabels exist in the entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContainsLabels")]
    public IReadOnlyList<string>? ContainsLabels { get; init; }

    /// <summary>
    /// Specify true to get only the JSON Lines where the image is labeled. Specify false to get only the JSON Lines where the image isn't labeled. If you don't specify Labeled, ListDatasetEntries returns JSON Lines for labeled and unlabeled images.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Labeled")]
    public bool? Labeled { get; init; }

    /// <summary>
    /// If specified, ListDatasetEntries only returns JSON Lines where the value of SourceRefContains is part of the source-ref field. The source-ref field contains the Amazon S3 location of the image. You can use SouceRefContains for tasks such as getting the JSON Line for a single image, or gettting JSON Lines for all images within a specific folder.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceRefContains")]
    public string? SourceRefContains { get; init; }

    /// <summary>
    /// Specifies an error filter for the response. Specify True to only include entries that have errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HasErrors")]
    public bool? HasErrors { get; init; }

    /// <summary>
    /// If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
