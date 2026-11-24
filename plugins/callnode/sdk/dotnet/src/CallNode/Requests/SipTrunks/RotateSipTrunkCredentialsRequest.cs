namespace CallNode.Requests.SipTrunks;

/// <summary>
/// The inputs of the RotateSipTrunkCredentials operation.
/// </summary>
public sealed record RotateSipTrunkCredentialsRequest
{
    /// <summary>
    /// Trunk id.
    /// </summary>
    public required string Id { get; init; }
}
