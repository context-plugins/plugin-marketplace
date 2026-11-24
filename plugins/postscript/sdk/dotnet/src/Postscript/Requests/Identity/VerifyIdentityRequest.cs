namespace Postscript.Requests.Identity;

/// <summary>
/// The inputs of the VerifyIdentity operation.
/// </summary>
public sealed record VerifyIdentityRequest
{
    public string? XPostscriptShopToken { get; init; }
}
