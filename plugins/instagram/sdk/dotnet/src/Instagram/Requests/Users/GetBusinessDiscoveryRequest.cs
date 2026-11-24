namespace Instagram.Requests.Users;

/// <summary>
/// The inputs of the GetBusinessDiscovery operation.
/// </summary>
public sealed record GetBusinessDiscoveryRequest
{
    public required string UserId { get; init; }

    /// <summary>
    /// Must include business_discovery.fields().
    /// </summary>
    public required string Fields { get; init; }

    public required string AccessToken { get; init; }
}
