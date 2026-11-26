using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.PaymentTerms;

/// <summary>
/// The inputs of the CreatePaymentTerm operation.
/// </summary>
public sealed record CreatePaymentTermRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreatePaymentTermRequestDto Body { get; init; }
}
