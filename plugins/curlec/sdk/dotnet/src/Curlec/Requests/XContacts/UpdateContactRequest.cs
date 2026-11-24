using Curlec.Models;

namespace Curlec.Requests.XContacts;

/// <summary>
/// The inputs of the UpdateContact operation.
/// </summary>
public sealed record UpdateContactRequest
{
    /// <summary>
    /// Unique identifier of the contact (e.g. <c>cont_00000000000001</c>).
    /// </summary>
    public required string ContactId { get; init; }

    public required ContactsRequest1 Body { get; init; }
}
