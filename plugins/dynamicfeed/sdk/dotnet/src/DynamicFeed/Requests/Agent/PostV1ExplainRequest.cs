namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the PostV1Explain operation.
/// </summary>
public sealed record PostV1ExplainRequest
{
    public string Subject { get; init; } = "";
}
