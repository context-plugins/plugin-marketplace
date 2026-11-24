using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.PostTemplates;

/// <summary>
/// The inputs of the Index16 operation.
/// </summary>
public sealed record Index16Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The direction of the request. Defaults to <c>asc</c>.
    /// </summary>
    public RequestDirection Order { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// The field to order by. Defaults to <c>created</c>.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
