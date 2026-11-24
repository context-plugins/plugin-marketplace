using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CodeHook
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Lambda function.
    /// </summary>
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }

    /// <summary>
    /// The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more information, see using-lambda.
    /// </summary>
    [JsonPropertyName("messageVersion")]
    public required string MessageVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
