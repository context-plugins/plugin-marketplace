namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the GetApplicationBypass operation.
/// </summary>
public sealed record GetApplicationBypassRequest
{
    /// <summary>
    /// The name of the policy to retrieve the application bypass for
    /// </summary>
    public required string PolicyName { get; init; }
}
