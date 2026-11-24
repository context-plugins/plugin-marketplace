namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the ListContacts operation.
/// </summary>
public sealed record ListContactsRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
