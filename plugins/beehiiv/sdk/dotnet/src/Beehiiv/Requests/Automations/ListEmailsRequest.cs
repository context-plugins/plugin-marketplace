namespace Beehiiv.Requests.Automations;

/// <summary>
/// The inputs of the ListEmails operation.
/// </summary>
public sealed record ListEmailsRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the automation object
    /// </summary>
    public required string AutomationId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// <b>Cursor-based pagination (recommended)</b>: Use this opaque cursor token to fetch the next page of results. Obtain it from the <c>next_cursor</c> field of a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// <b>Deprecated</b>: Use <c>cursor</c> instead. Pagination returns the results in pages. Limited to 100 pages maximum.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
