using System;
using Dynamics365BusinessCentral.Core.Validation.Attributes;

namespace Dynamics365BusinessCentral.Requests.Customers;

/// <summary>
/// The inputs of the ListCustomers operation.
/// </summary>
public sealed record ListCustomersRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// Maximum number of items to return
    /// </summary>
    [Minimum(0)]
    public int? Top { get; init; }

    /// <summary>
    /// Number of items to skip
    /// </summary>
    [Minimum(0)]
    public int? Skip { get; init; }

    /// <summary>
    /// OData filter expression
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// OData order by expression
    /// </summary>
    public string? Orderby { get; init; }

    /// <summary>
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Related entities to expand inline
    /// </summary>
    public string? Expand { get; init; }
}
