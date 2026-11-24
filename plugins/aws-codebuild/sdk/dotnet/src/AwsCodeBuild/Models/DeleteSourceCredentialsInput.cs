using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DeleteSourceCredentialsInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the token.
    /// </summary>
    [JsonPropertyName("arn")]
    public required string Arn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
