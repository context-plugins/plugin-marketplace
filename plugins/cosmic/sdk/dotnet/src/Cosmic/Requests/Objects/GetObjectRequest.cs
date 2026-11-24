using Cosmic.Core.Validation.Attributes;
using Cosmic.Models.Enums;

namespace Cosmic.Requests.Objects;

/// <summary>
/// The inputs of the GetObject operation.
/// </summary>
public sealed record GetObjectRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Object id.
    /// </summary>
    public required string ObjectId { get; init; }

    /// <summary>
    /// The Bucket read key. Required unless the Bucket has no read key configured.
    /// </summary>
    public string? ReadKey { get; init; }

    /// <summary>
    /// A short-lived JWT issued by the Cosmic dashboard (object editor &gt; Preview). When present and valid, the request is treated as <c>status=any</c> so the latest draft is returned. Bound to one Bucket for one hour. Still requires <c>read_key</c>. Invalid or expired tokens return 401.
    /// </summary>
    public string? PreviewToken { get; init; }

    /// <summary>
    /// Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing <c>props</c> is the main way to keep responses under the 6 MB response cap and to reduce latency.
    /// </summary>
    public string? Props { get; init; }

    /// <summary>
    /// Which version of each Object to return. <c>any</c> returns the latest draft or published version.
    /// </summary>
    public Status4 Status { get; init; } = Status4.Published;

    /// <summary>
    /// How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references are rejected.
    /// </summary>
    [Minimum(0)]
    [Maximum(3)]
    public int Depth { get; init; } = 0;

    /// <summary>
    /// Set to <c>false</c> to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.
    /// </summary>
    public bool UseCache { get; init; } = true;

    /// <summary>
    /// Set to <c>true</c> to indent the JSON response for human reading. Increases response size.
    /// </summary>
    public bool Pretty { get; init; } = false;
}
