using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DatasetDocumentClassifierInputDataConfig
{
    /// <summary>
    /// The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files. For example, if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input. This parameter is required if you set DataFormat to COMPREHEND_CSV.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    /// <summary>
    /// Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelDelimiter")]
    public string? LabelDelimiter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
