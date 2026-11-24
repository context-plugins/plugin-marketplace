using RelmCrm.Core.Validation.Attributes;

namespace RelmCrm.Requests.Contacts;

/// <summary>
/// The inputs of the ListContacts operation.
/// </summary>
public sealed record ListContactsRequest
{
    /// <summary>
    /// Page size (default 25, max 100).
    /// </summary>
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// Opaque keyset cursor from a prior next_cursor.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Include soft-deleted rows.
    /// </summary>
    public bool? IncludeDeleted { get; init; }

    /// <summary>
    /// Substring over name/email/phone/linkedin.
    /// </summary>
    public string? Q { get; init; }

    public string? Email { get; init; }

    public string? CompanyId { get; init; }

    /// <summary>
    /// A registered contact.type value (validated).
    /// </summary>
    public string? Type { get; init; }
}
