using DoiT.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the DeleteDatahubEventsByFilter operation.
/// </summary>
public sealed record DeleteDatahubEventsByFilterRequest
{
    public required DatahubV1EventsDeleteRequest Body { get; init; }
}
