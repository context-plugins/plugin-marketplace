namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1NotaryLogV1NotaryLogGet operation.
/// </summary>
public sealed record V1NotaryLogV1NotaryLogGetRequest
{
    public int Limit { get; init; } = 50;

    public int? Before { get; init; }
}
