namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the DeleteCustomerAlias operation.
/// </summary>
public sealed record DeleteCustomerAliasRequest
{
    /// <summary>
    /// Paid customer display id
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Customer alias value.
    /// </summary>
    public required string Alias { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
