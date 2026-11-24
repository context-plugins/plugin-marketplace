namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetEssentials operation.
/// </summary>
public sealed record GetEssentialsRequest
{
    public required string Ein { get; init; }
}
