namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the List2 operation.
/// </summary>
public sealed record List2Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
