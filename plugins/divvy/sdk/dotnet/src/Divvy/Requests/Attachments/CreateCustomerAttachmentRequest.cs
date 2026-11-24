using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Attachments;

/// <summary>
/// The inputs of the CreateCustomerAttachment operation.
/// </summary>
public sealed record CreateCustomerAttachmentRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string Name { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required IReadOnlyList<string> Body { get; init; }
}
