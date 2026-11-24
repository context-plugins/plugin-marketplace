using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record EntityRecognizerDocuments
{
    /// <summary>
    /// Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    /// <summary>
    /// Specifies the Amazon S3 location where the test documents for an entity recognizer are located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestS3Uri")]
    public string? TestS3Uri { get; init; }

    /// <summary>
    /// Specifies how the text in an input file should be processed. This is optional, and the default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputFormat")]
    public InputFormat? InputFormat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
