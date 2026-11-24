namespace Contentstack.Requests.Stacks;

/// <summary>
/// The inputs of the DeleteStack operation.
/// </summary>
public sealed record DeleteStackRequest
{
    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }
}
