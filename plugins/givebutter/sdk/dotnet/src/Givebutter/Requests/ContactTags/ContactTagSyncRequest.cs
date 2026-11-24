using Givebutter.Models;

namespace Givebutter.Requests.ContactTags;

/// <summary>
/// The inputs of the ContactTagSync operation.
/// </summary>
public sealed record ContactTagSyncRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    public required V1ContactsTagsSyncRequest Body { get; init; }
}
