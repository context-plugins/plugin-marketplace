namespace Contentstack.Requests.EntryVariants;

/// <summary>
/// The inputs of the GetAllEntryVariants operation.
/// </summary>
public sealed record GetAllEntryVariantsRequest
{
    /// <summary>
    /// The unique identifier (UID) of the content type.
    /// </summary>
    public required string ContentTypeUid { get; init; }

    /// <summary>
    /// The unique identifier (UID) of the entry.
    /// </summary>
    public required string EntryUid { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
