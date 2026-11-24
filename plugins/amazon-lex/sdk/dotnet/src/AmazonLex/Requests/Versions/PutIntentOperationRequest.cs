using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the PutIntent operation.
/// </summary>
public sealed record PutIntentOperationRequest
{
    public required string Name { get; init; }

    public PutIntentRequest? Body { get; init; }
}
