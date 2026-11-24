namespace DynamicFeed.Requests.Robot;

/// <summary>
/// The inputs of the V1AnchorDailyV1AnchorDailyGet operation.
/// </summary>
public sealed record V1AnchorDailyV1AnchorDailyGetRequest
{
    public string Date { get; init; } = "";
}
