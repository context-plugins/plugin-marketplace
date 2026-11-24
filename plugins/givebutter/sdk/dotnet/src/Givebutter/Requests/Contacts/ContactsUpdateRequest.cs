using Givebutter.Models;

namespace Givebutter.Requests.Contacts;

/// <summary>
/// The inputs of the ContactsUpdate operation.
/// </summary>
public sealed record ContactsUpdateRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    public UpdateContactRequest? Body { get; init; }
}
