using Curlec.Models;

namespace Curlec.Requests.XContacts;

/// <summary>
/// The inputs of the CreateContact operation.
/// </summary>
public sealed record CreateContactRequest
{
    public required ContactsRequest Body { get; init; }
}
