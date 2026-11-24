using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Requests.Assets;

/// <summary>
/// The inputs of the GetAllAssets operation.
/// </summary>
public sealed record GetAllAssetsRequest
{
    /// <summary>
    /// Number of entries to skip for pagination.
    /// </summary>
    [Minimum(0)]
    public int Skip { get; init; } = 0;

    /// <summary>
    /// Maximum number of entries to return. Maximum allowed is 250.
    /// </summary>
    [Minimum(1)]
    [Maximum(250)]
    public int Limit { get; init; } = 100;

    /// <summary>
    /// Set to true to include the total count of assets in the response.
    /// </summary>
    public bool? IncludeCount { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
