namespace RelmCrm.Requests.Activities;

/// <summary>
/// The inputs of the RestoreActivity operation.
/// </summary>
public sealed record RestoreActivityRequest
{
    public required string Id { get; init; }
}
