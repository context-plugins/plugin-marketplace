using AmazonLex.Models;

namespace AmazonLex.Requests.Tags;

/// <summary>
/// The inputs of the UntagResource1 operation.
/// </summary>
public sealed record UntagResource1Request
{
    public required string ResourceArn { get; init; }

    public ModelsLexUntagResourceRequest? Body { get; init; }
}
