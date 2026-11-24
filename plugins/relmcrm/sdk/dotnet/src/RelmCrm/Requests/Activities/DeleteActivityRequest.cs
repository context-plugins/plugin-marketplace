namespace RelmCrm.Requests.Activities;

/// <summary>
/// The inputs of the DeleteActivity operation.
/// </summary>
public sealed record DeleteActivityRequest
{
    public required string Id { get; init; }
}
