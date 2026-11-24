using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the Create3 operation.
/// </summary>
public sealed record Create3Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public CustomerCreate? Body { get; init; }
}
