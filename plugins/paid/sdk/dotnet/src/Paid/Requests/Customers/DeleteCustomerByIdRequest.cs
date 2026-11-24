namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the DeleteCustomerById operation.
/// </summary>
public sealed record DeleteCustomerByIdRequest
{
    /// <summary>
    /// Paid customer display id
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
