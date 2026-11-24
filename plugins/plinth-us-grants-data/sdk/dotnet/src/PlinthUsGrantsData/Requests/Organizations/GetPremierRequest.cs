namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetPremier operation.
/// </summary>
public sealed record GetPremierRequest
{
    public required string Ein { get; init; }
}
