namespace Jid.Requests.Verify;

/// <summary>
/// The inputs of the GetBusinessFile operation.
/// </summary>
public sealed record GetBusinessFileRequest
{
    /// <summary>
    /// Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
    /// </summary>
    public required string Id { get; init; }
}
