using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Invoices;

/// <summary>
/// The inputs of the GetPaymentLink operation.
/// </summary>
public sealed record GetPaymentLinkRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required InvoicePaymentLinkRequestDto Body { get; init; }
}
