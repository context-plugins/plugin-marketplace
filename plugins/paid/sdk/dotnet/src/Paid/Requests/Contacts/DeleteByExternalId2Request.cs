namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the DeleteByExternalId2 operation.
/// </summary>
public sealed record DeleteByExternalId2Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
