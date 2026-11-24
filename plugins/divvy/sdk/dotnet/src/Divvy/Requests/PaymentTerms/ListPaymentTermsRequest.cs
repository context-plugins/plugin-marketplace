using System.ComponentModel.DataAnnotations;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.PaymentTerms;

/// <summary>
/// The inputs of the ListPaymentTerms operation.
/// </summary>
public sealed record ListPaymentTermsRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
