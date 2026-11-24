namespace Basiq.Requests.Events;

/// <summary>
/// The inputs of the GetTypeById operation.
/// </summary>
public sealed record GetTypeByIdRequest
{
    public required string Id { get; init; }
}
