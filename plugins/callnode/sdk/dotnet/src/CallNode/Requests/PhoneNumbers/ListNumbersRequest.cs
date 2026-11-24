using System.ComponentModel.DataAnnotations;
using CallNode.Models.Enums;

namespace CallNode.Requests.PhoneNumbers;

/// <summary>
/// The inputs of the ListNumbers operation.
/// </summary>
public sealed record ListNumbersRequest
{
    /// <summary>
    /// Filter by status, e.g. <c>active</c>.
    /// </summary>
    public string? Status { get; init; }

    public Type3? Type { get; init; }

    /// <summary>
    /// Numbers bought via the dashboard (<c>web</c>) or this API (<c>api</c>).
    /// </summary>
    public PurchaseSource1? PurchaseSource { get; init; }

    /// <summary>
    /// Numbers carrying this exact tag (as stored; up to 24 characters).
    /// </summary>
    [MaxLength(24)]
    public string? Tag { get; init; }

    /// <summary>
    /// Substring match on the number's digits, the friendly name (case-insensitive), or a tag.
    /// </summary>
    [MaxLength(40)]
    public string? Q { get; init; }
}
