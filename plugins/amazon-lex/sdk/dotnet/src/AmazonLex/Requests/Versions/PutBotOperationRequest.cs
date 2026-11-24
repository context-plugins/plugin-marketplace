using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the PutBot operation.
/// </summary>
public sealed record PutBotOperationRequest
{
    public required string Name { get; init; }

    public PutBotRequest? Body { get; init; }
}
