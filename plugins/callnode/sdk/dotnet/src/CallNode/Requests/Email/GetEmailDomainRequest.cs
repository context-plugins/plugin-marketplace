namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the GetEmailDomain operation.
/// </summary>
public sealed record GetEmailDomainRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// When set, the status and the records' statuses are re-read from the sending infrastructure first, and the answer carries <c>newDomainLimit</c>.
    /// </summary>
    public string? Refresh { get; init; }
}
