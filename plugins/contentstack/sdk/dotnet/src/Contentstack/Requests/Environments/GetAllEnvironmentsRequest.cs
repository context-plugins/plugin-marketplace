namespace Contentstack.Requests.Environments;

/// <summary>
/// The inputs of the GetAllEnvironments operation.
/// </summary>
public sealed record GetAllEnvironmentsRequest
{
    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// User session token for authentication. Required if not using management token.
    /// </summary>
    public string? Authtoken { get; init; }
}
