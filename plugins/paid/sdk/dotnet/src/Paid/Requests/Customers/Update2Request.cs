using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the Update2 operation.
/// </summary>
public sealed record Update2Request
{
    public required string CustomerId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public CustomerUpdate? Body { get; init; }
}
