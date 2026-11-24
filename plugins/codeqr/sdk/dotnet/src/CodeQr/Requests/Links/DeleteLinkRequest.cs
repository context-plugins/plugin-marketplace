namespace CodeQr.Requests.Links;

/// <summary>
/// The inputs of the DeleteLink operation.
/// </summary>
public sealed record DeleteLinkRequest
{
    /// <summary>
    /// The id of the link to delete. You may use either <c>linkId</c> (obtained via <c>/links/info</c> endpoint) or <c>externalId</c> prefixed with <c>ext_</c>.
    /// </summary>
    public required string LinkId { get; init; }
}
