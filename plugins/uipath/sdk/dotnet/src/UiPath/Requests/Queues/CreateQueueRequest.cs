using UiPath.Models;

namespace UiPath.Requests.Queues;

/// <summary>
/// The inputs of the CreateQueue operation.
/// </summary>
public sealed record CreateQueueRequest
{
    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }

    public required QueueDefinition Body { get; init; }
}
