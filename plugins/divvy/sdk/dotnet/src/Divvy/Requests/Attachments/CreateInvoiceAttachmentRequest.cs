using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Attachments;

/// <summary>
/// The inputs of the CreateInvoiceAttachment operation.
/// </summary>
public sealed record CreateInvoiceAttachmentRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    [MinLength(1)]
    public required string Name { get; init; }

    public bool? ReplaceInvoicePdf { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required IReadOnlyList<string> Body { get; init; }
}
