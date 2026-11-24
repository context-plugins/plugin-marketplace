namespace CallNode.Requests.Faxes;

/// <summary>
/// The inputs of the GetFax operation.
/// </summary>
public sealed record GetFaxRequest
{
    public required string Id { get; init; }
}
