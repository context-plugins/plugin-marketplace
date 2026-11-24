namespace Givebutter.Requests.Contacts;

/// <summary>
/// The inputs of the ContactRestore operation.
/// </summary>
public sealed record ContactRestoreRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }
}
