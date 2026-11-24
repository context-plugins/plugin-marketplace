using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the CreateIntentVersion operation.
/// </summary>
public sealed record CreateIntentVersionOperationRequest
{
    public required string Name { get; init; }

    public CreateIntentVersionRequest? Body { get; init; }
}
