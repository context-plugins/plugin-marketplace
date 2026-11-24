using Contentstack.Models;

namespace Contentstack.Requests.Stacks;

/// <summary>
/// The inputs of the UpdateStack operation.
/// </summary>
public sealed record UpdateStackOperationRequest
{
    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    public required UpdateStackRequest Body { get; init; }
}
