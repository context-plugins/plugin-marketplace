namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1StreamV1StreamGet operation.
/// </summary>
public sealed record V1StreamV1StreamGetRequest
{
    public string Tool { get; init; } = "";

    public string Args { get; init; } = "";

    public double Interval { get; init; } = 15d;

    public int Count { get; init; } = 20;
}
