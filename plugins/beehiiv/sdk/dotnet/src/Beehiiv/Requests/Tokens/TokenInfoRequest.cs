namespace Beehiiv.Requests.Tokens;

/// <summary>
/// The inputs of the TokenInfo operation.
/// </summary>
public sealed record TokenInfoRequest
{
    /// <summary>
    /// Bearer access token (<c>Bearer &lt;access_token&gt;</c>).
    /// </summary>
    public required string Authorization { get; init; }
}
