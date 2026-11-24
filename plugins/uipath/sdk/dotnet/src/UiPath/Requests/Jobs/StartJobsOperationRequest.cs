using UiPath.Models;

namespace UiPath.Requests.Jobs;

/// <summary>
/// The inputs of the StartJobs operation.
/// </summary>
public sealed record StartJobsOperationRequest
{
    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }

    public required StartJobsRequest Body { get; init; }
}
