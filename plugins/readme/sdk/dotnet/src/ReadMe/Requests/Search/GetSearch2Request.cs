namespace ReadMe.Requests.Search;

/// <summary>
/// The inputs of the GetSearch2 operation.
/// </summary>
public sealed record GetSearch2Request
{
    public required string Q { get; init; }
}
