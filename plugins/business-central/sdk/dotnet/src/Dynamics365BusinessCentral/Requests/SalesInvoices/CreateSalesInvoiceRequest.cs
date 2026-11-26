using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.SalesInvoices;

/// <summary>
/// The inputs of the CreateSalesInvoice operation.
/// </summary>
public sealed record CreateSalesInvoiceRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required SalesInvoiceCreate Body { get; init; }
}
