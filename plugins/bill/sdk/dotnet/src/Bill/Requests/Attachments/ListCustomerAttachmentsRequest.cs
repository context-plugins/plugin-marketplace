using System.ComponentModel.DataAnnotations;
using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Attachments;

/// <summary>
/// The inputs of the ListCustomerAttachments operation.
/// </summary>
public sealed record ListCustomerAttachmentsRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
