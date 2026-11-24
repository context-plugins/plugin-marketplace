using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record LambdaCodeHook
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Lambda function.
    /// </summary>
    [JsonPropertyName("lambdaARN")]
    public required string LambdaArn { get; init; }

    /// <summary>
    /// The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
    /// </summary>
    [JsonPropertyName("codeHookInterfaceVersion")]
    public required string CodeHookInterfaceVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
