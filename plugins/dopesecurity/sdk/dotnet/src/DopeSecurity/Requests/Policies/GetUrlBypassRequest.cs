namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the GetUrlBypass operation.
/// </summary>
public sealed record GetUrlBypassRequest
{
    /// <summary>
    /// The name of the policy to retrieve the URL bypass for
    /// </summary>
    public required string PolicyName { get; init; }
}
