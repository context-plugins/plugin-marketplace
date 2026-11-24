using UiPath.Models;

namespace UiPath.Requests.Assets;

/// <summary>
/// The inputs of the CreateAsset operation.
/// </summary>
public sealed record CreateAssetRequest
{
    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }

    public required Asset Body { get; init; }
}
