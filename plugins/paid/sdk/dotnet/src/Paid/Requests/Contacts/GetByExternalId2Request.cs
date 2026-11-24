namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the GetByExternalId2 operation.
/// </summary>
public sealed record GetByExternalId2Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
