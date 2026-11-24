namespace Contentstack.Requests.Entries;

/// <summary>
/// The inputs of the GetSingleEntry operation.
/// </summary>
public sealed record GetSingleEntryRequest
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
    /// The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified.
    /// </summary>
    public string? Locale { get; init; }

    /// <summary>
    /// Set to true to include referenced entries inline in the response.
    /// </summary>
    public bool? IncludeReference { get; init; }

    /// <summary>
    /// Retrieve a specific published version of the entry.
    /// </summary>
    public int? Version { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
