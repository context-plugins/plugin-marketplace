namespace Givebutter.Requests.Contacts;

/// <summary>
/// The inputs of the ContactsShow operation.
/// </summary>
public sealed record ContactsShowRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }
}
