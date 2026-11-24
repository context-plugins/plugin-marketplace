namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the Get2 operation.
/// </summary>
public sealed record Get2Request
{
    public required string ContactId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
