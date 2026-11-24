using System;

namespace MicrosoftDynamicsNav.Requests.PurchaseOrders;

/// <summary>
/// The inputs of the DeletePurchaseOrder operation.
/// </summary>
public sealed record DeletePurchaseOrderRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the purchase order
    /// </summary>
    public required Guid PurchaseOrderId { get; init; }
}
