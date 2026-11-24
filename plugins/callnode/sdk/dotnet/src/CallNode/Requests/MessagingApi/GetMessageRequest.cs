namespace CallNode.Requests.MessagingApi;

/// <summary>
/// The inputs of the GetMessage operation.
/// </summary>
public sealed record GetMessageRequest
{
    public required string Id { get; init; }
}
