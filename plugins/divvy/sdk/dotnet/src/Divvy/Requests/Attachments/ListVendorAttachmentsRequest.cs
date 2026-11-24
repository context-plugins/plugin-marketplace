using System.ComponentModel.DataAnnotations;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Attachments;

/// <summary>
/// The inputs of the ListVendorAttachments operation.
/// </summary>
public sealed record ListVendorAttachmentsRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
