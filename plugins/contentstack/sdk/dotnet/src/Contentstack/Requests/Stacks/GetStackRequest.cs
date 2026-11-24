namespace Contentstack.Requests.Stacks;

/// <summary>
/// The inputs of the GetStack operation.
/// </summary>
public sealed record GetStackRequest
{
    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }
}
