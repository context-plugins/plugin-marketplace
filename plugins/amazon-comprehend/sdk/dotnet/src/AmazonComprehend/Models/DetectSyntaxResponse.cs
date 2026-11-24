using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DetectSyntaxResponse
{
    /// <summary>
    /// A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see Syntax in the Comprehend Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SyntaxTokens")]
    public IReadOnlyList<SyntaxToken>? SyntaxTokens { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
