using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteResourcePolicyRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns an exception If you don't specify a revision ID, Amazon Lex will delete the current policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedRevisionId")]
    public string? ExpectedRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
