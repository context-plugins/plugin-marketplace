using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.PaymentTerms;

/// <summary>
/// The inputs of the GetPaymentTerm operation.
/// </summary>
public sealed record GetPaymentTermRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    [MinLength(1)]
    public required string PaymentTermId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
