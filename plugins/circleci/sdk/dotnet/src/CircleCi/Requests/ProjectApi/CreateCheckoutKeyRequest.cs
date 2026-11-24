using CircleCi.Models;

namespace CircleCi.Requests.ProjectApi;

/// <summary>
/// The inputs of the CreateCheckoutKey operation.
/// </summary>
public sealed record CreateCheckoutKeyRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    public required ProjectCheckoutKeyRequest Body { get; init; }
}
