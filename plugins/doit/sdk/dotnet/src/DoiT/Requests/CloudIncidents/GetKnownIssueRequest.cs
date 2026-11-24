namespace DoiT.Requests.CloudIncidents;

/// <summary>
/// The inputs of the GetKnownIssue operation.
/// </summary>
public sealed record GetKnownIssueRequest
{
    /// <summary>
    /// The unique id of a cloud incident.
    /// </summary>
    public required string Id { get; init; }
}
