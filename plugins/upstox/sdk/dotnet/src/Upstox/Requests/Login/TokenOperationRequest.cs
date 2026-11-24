using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Login;

/// <summary>
/// The inputs of the Token operation.
/// </summary>
public sealed record TokenOperationRequest
{
    [MinLength(1)]
    public required string Code { get; init; }

    /// <summary>
    /// OAuth API key that is a public identifier for app
    /// </summary>
    [MinLength(1)]
    public required string ClientId { get; init; }

    /// <summary>
    /// OAuth client secret that is a private secret known only to app and authorization server
    /// </summary>
    [MinLength(1)]
    public required string ClientSecret { get; init; }

    /// <summary>
    /// Authorization server will redirect the user back to the application via redirect url
    /// </summary>
    [MinLength(1)]
    public required string RedirectUri { get; init; }

    /// <summary>
    /// Type of grant used to get an access token
    /// </summary>
    [MinLength(1)]
    public required string GrantType { get; init; }

    /// <summary>
    /// Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set to true to refresh; false or omit to reuse an existing extended token when available.
    /// </summary>
    public bool? RefreshExtendedToken { get; init; }
}
