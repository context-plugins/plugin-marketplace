namespace UiPath.Requests.Assets;

/// <summary>
/// The inputs of the GetAsset operation.
/// </summary>
public sealed record GetAssetRequest
{
    /// <summary>
    /// The unique integer identifier of the entity
    /// </summary>
    public required long Key { get; init; }

    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }
}
