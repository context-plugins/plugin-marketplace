using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.PaymentTerms;

/// <summary>
/// The inputs of the UpdatePaymentTerm operation.
/// </summary>
public sealed record UpdatePaymentTermRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    [MinLength(1)]
    public required string PaymentTermId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdatePaymentTermRequestDto Body { get; init; }
}
