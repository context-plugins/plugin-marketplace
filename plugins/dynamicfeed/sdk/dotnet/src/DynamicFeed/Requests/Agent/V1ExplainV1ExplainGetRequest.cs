namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1ExplainV1ExplainGet operation.
/// </summary>
public sealed record V1ExplainV1ExplainGetRequest
{
    public string Subject { get; init; } = "";
}
