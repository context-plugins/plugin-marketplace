namespace Beehiiv.Requests.OauthUsers;

/// <summary>
/// The inputs of the Identify operation.
/// </summary>
public sealed record IdentifyRequest
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
