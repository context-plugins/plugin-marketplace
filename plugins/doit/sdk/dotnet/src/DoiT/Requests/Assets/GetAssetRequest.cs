namespace DoiT.Requests.Assets;

/// <summary>
/// The inputs of the GetAsset operation.
/// </summary>
public sealed record GetAssetRequest
{
    /// <summary>
    /// The unique id of an asset.
    /// </summary>
    public required string Id { get; init; }
}
