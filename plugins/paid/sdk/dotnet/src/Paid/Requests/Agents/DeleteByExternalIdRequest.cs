namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the DeleteByExternalId operation.
/// </summary>
public sealed record DeleteByExternalIdRequest
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
