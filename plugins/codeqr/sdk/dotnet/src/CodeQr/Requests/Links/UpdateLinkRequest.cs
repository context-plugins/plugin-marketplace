using CodeQr.Models;

namespace CodeQr.Requests.Links;

/// <summary>
/// The inputs of the UpdateLink operation.
/// </summary>
public sealed record UpdateLinkRequest
{
    /// <summary>
    /// The id of the link to update. You may use either <c>linkId</c> (obtained via <c>/links/info</c> endpoint) or <c>externalId</c> prefixed with <c>ext_</c>.
    /// </summary>
    public required string LinkId { get; init; }

    public LinksRequest1? Body { get; init; }
}
