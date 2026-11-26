using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Attachments;

/// <summary>
/// The inputs of the GetAttachment operation.
/// </summary>
public sealed record GetAttachmentRequest
{
    [MinLength(1)]
    public required string AttachmentId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
