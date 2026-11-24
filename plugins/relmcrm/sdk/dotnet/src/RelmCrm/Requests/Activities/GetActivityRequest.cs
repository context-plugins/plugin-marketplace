namespace RelmCrm.Requests.Activities;

/// <summary>
/// The inputs of the GetActivity operation.
/// </summary>
public sealed record GetActivityRequest
{
    public required string Id { get; init; }
}
