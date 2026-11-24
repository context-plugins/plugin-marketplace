namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the SearchPost operation.
/// </summary>
public sealed record SearchPostRequest
{
    public required object Body { get; init; }
}
