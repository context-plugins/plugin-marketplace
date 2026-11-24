using Paid.Models;

namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the Create2 operation.
/// </summary>
public sealed record Create2Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public ContactCreate? Body { get; init; }
}
