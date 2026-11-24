using DoiT.Models;

namespace DoiT.Requests.Assets;

/// <summary>
/// The inputs of the IdOfAsset operation.
/// </summary>
public sealed record IdOfAssetRequest
{
    /// <summary>
    /// The unique id of an asset.
    /// </summary>
    public required string Id { get; init; }

    public BillingV1AssetsRequest? Body { get; init; }
}
