namespace Givebutter.Requests.Contacts;

/// <summary>
/// The inputs of the ContactsDestroy operation.
/// </summary>
public sealed record ContactsDestroyRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }
}
