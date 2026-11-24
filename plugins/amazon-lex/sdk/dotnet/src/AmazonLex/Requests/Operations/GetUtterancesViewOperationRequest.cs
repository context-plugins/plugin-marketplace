namespace AmazonLex.Requests.Operations;

/// <summary>
/// The inputs of the GetUtterancesView operation.
/// </summary>
public sealed record GetUtterancesViewOperationRequest
{
    public required string BotName { get; init; }
}
