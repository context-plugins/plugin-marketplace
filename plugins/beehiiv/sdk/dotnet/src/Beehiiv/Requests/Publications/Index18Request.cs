using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Publications;

/// <summary>
/// The inputs of the Index18 operation.
/// </summary>
public sealed record Index18Request
{
    /// <summary>
    /// Optionally expand the results by adding additional information like subscription counts and engagement stats.
    /// </summary>
    public IReadOnlyList<PublicationsRequestExpandItem>? Expand { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// The field that the results are sorted by. Defaults to created&lt;br&gt; <c>created</c> - The time in which the publication was first created.&lt;br&gt; <c>name</c> - The name of the publication.
    /// </summary>
    public PublicationsListRequestOrderBy OrderBy { get; init; } = PublicationsListRequestOrderBy.Created;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
