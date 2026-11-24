using Statable.Models.Enums;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the GetSiteSnippet operation.
/// </summary>
public sealed record GetSiteSnippetRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Omit for the tracking script.
    /// </summary>
    public TypeEnum? Type { get; init; }
}
