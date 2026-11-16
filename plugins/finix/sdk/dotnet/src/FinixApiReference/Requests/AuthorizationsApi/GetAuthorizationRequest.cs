namespace FinixApiReference.Requests.AuthorizationsApi;

/// <summary>
/// The inputs of the GetAuthorization operation.
/// </summary>
public sealed record GetAuthorizationRequest
{
    /// <summary>
    /// ID of <c>Authorization</c> to fetch.
    /// </summary>
    public required string AuthorizationId { get; init; }
}
