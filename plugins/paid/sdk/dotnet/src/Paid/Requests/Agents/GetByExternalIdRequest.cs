namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the GetByExternalId operation.
/// </summary>
public sealed record GetByExternalIdRequest
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
