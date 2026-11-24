namespace Basiq.Requests.Events;

/// <summary>
/// The inputs of the GetEventTypeById operation.
/// </summary>
public sealed record GetEventTypeByIdRequest
{
    public required string Id { get; init; }
}
