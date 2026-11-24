using Curlec.Core.Validation.Attributes;

namespace Curlec.Requests.XContacts;

/// <summary>
/// The inputs of the ListContacts operation.
/// </summary>
public sealed record ListContactsRequest
{
    /// <summary>
    /// Filter by contact name (partial match supported).
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by contact email address.
    /// </summary>
    public string? Email { get; init; }

    /// <summary>
    /// Filter by contact phone number.
    /// </summary>
    public string? Contact { get; init; }

    /// <summary>
    /// Filter by your unique reference ID for the contact (max 40 chars).
    /// </summary>
    public string? ReferenceId { get; init; }

    /// <summary>
    /// Unix timestamp filter
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp. Only contacts created before this timestamp are returned.
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of contacts to return. Default: 10. Maximum: 100.
    /// </summary>
    [Maximum(100)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of contacts to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
