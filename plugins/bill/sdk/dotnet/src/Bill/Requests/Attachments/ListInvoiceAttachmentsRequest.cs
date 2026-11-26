using System.ComponentModel.DataAnnotations;
using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Attachments;

/// <summary>
/// The inputs of the ListInvoiceAttachments operation.
/// </summary>
public sealed record ListInvoiceAttachmentsRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
