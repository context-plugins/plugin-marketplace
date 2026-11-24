using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.Queues;

/// <summary>
/// The inputs of the ListQueues operation.
/// </summary>
public sealed record ListQueuesRequest
{
    /// <summary>
    /// OData filter expression to narrow results (e.g., State eq 'Running')
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Maximum number of records to return (default 100, max 1000)
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int? Top { get; init; }

    /// <summary>
    /// Number of records to skip for pagination
    /// </summary>
    [Minimum(0)]
    public int? Skip { get; init; }

    /// <summary>
    /// The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
    /// </summary>
    public long? XUipathOrganizationUnitId { get; init; }
}
