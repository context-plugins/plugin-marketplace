using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record LambdaAuthorizerConfig
{
    /// <summary>
    /// The number of seconds a response should be cached for. The default is 0 seconds, which disables caching. If you don't specify a value for authorizerResultTtlInSeconds, the default value is used. The maximum value is one hour (3600 seconds). The Lambda function can override this by returning a ttlOverride key in its response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizerResultTtlInSeconds")]
    public int? AuthorizerResultTtlInSeconds { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a standard Lambda ARN, a version ARN (.../v3), or an alias ARN. Note: This Lambda function must have the following resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To use the Command Line Interface (CLI), run the following: aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction
    /// </summary>
    [JsonPropertyName("authorizerUri")]
    public required string AuthorizerUri { get; init; }

    /// <summary>
    /// A regular expression for validation of tokens before the Lambda function is called.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identityValidationExpression")]
    public string? IdentityValidationExpression { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
