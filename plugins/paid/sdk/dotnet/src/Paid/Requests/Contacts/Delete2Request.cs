namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the Delete2 operation.
/// </summary>
public sealed record Delete2Request
{
    public required string ContactId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
