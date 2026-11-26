using System.ComponentModel.DataAnnotations;
using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Organizations;

/// <summary>
/// The inputs of the ListBillingStatements operation.
/// </summary>
public sealed record ListBillingStatementsRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? InvoiceDateFrom { get; init; }

    public string? InvoiceDateTo { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
