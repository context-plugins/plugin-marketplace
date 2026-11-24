using AmazonLex.Models;

namespace AmazonLex.Requests.Tags;

/// <summary>
/// The inputs of the TagResource1 operation.
/// </summary>
public sealed record TagResource1Request
{
    public required string ResourceArn { get; init; }

    public ModelsLexTagResourceRequest? Body { get; init; }
}
