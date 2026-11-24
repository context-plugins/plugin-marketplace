using Givebutter.Models;

namespace Givebutter.Requests.ContactTags;

/// <summary>
/// The inputs of the ContactTagDestroy operation.
/// </summary>
public sealed record ContactTagDestroyRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    public required V1ContactsTagsRemoveRequest Body { get; init; }
}
