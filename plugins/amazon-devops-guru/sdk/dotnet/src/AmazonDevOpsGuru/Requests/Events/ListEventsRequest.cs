using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Events;

/// <summary>
/// The inputs of the ListEvents operation.
/// </summary>
public sealed record ListEventsRequest
{
    public EventsRequest? Body { get; init; }
}
