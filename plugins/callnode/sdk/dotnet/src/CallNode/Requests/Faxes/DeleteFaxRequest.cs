namespace CallNode.Requests.Faxes;

/// <summary>
/// The inputs of the DeleteFax operation.
/// </summary>
public sealed record DeleteFaxRequest
{
    public required string Id { get; init; }
}
