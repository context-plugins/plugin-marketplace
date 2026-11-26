using System;

namespace Dynamics365BusinessCentral.Requests.PurchaseOrders;

/// <summary>
/// The inputs of the GetPurchaseOrder operation.
/// </summary>
public sealed record GetPurchaseOrderRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the purchase order
    /// </summary>
    public required Guid PurchaseOrderId { get; init; }

    /// <summary>
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Related entities to expand inline
    /// </summary>
    public string? Expand { get; init; }
}
