namespace Bitly.Requests.Apps;

/// <summary>
/// The inputs of the GetOAuthApp operation.
/// </summary>
public sealed record GetOAuthAppRequest
{
    /// <summary>
    /// The client ID of an OAuth app
    /// </summary>
    public required string ClientId { get; init; }
}
