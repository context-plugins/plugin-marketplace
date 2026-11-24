namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the GetEmailMessage operation.
/// </summary>
public sealed record GetEmailMessageRequest
{
    public required string Id { get; init; }
}
