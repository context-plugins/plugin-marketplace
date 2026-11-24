namespace Beehiiv.Requests.ComplimentaryAccessApi;

/// <summary>
/// The inputs of the Index8 operation.
/// </summary>
public sealed record Index8Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optional list of expandable objects.&lt;br&gt;<c>tier</c> - Returns the full tier object associated with this complimentary access.&lt;br&gt;<c>stats</c> - Returns granted subscription counts.
    /// </summary>
    public string? Expand { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Use this opaque cursor token to fetch the next page of results. Obtain the value from <c>next_cursor</c> in a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
