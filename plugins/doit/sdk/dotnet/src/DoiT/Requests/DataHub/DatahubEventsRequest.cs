using DoiT.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the DatahubEvents operation.
/// </summary>
public sealed record DatahubEventsRequest
{
    public required DatahubV1EventsRequest Body { get; init; }
}
