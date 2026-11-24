using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the DeleteIntentVersion operation.
/// </summary>
public sealed record DeleteIntentVersionOperationRequest
{
    public required string Name { get; init; }

    public required string Version { get; init; }

    public DeleteIntentVersionRequest? Body { get; init; }
}
