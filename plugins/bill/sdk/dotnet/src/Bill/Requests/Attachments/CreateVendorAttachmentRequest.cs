using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Attachments;

/// <summary>
/// The inputs of the CreateVendorAttachment operation.
/// </summary>
public sealed record CreateVendorAttachmentRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    [MinLength(1)]
    public required string Name { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required IReadOnlyList<string> Body { get; init; }
}
