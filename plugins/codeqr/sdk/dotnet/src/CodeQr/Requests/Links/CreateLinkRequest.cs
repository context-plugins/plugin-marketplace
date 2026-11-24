using CodeQr.Models;

namespace CodeQr.Requests.Links;

/// <summary>
/// The inputs of the CreateLink operation.
/// </summary>
public sealed record CreateLinkRequest
{
    public LinksRequest? Body { get; init; }
}
