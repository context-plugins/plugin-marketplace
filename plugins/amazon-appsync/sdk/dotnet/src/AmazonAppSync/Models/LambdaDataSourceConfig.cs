using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record LambdaDataSourceConfig
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Lambda function.
    /// </summary>
    [JsonPropertyName("lambdaFunctionArn")]
    public required string LambdaFunctionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
