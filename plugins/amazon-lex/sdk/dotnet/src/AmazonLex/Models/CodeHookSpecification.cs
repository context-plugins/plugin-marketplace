using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CodeHookSpecification
{
    [JsonPropertyName("lambdaCodeHook")]
    public required LambdaCodeHook LambdaCodeHook { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
