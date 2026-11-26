using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.PurchaseOrders;

/// <summary>
/// The inputs of the UpdatePurchaseOrder operation.
/// </summary>
public sealed record UpdatePurchaseOrderRequest
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
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required PurchaseOrderUpdate Body { get; init; }
}
