using UiPath.Models;

namespace UiPath.Requests.QueueItems;

/// <summary>
/// The inputs of the AddQueueItem operation.
/// </summary>
public sealed record AddQueueItemOperationRequest
{
    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }

    public required AddQueueItemRequest Body { get; init; }
}
