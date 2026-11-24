namespace Contentstack.Requests.Assets;

/// <summary>
/// The inputs of the GetSingleAsset operation.
/// </summary>
public sealed record GetSingleAssetRequest
{
    /// <summary>
    /// The unique identifier (UID) of the asset.
    /// </summary>
    public required string AssetUid { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
