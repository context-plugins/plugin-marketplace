using Givebutter.Models;

namespace Givebutter.Requests.ContactTags;

/// <summary>
/// The inputs of the ContactTagStore operation.
/// </summary>
public sealed record ContactTagStoreRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    public required V1ContactsTagsAddRequest Body { get; init; }
}
