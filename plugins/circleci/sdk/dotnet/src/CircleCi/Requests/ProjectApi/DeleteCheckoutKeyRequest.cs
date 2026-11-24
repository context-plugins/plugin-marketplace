namespace CircleCi.Requests.ProjectApi;

/// <summary>
/// The inputs of the DeleteCheckoutKey operation.
/// </summary>
public sealed record DeleteCheckoutKeyRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// The fingerprint of the checkout key
    /// </summary>
    public required string Fingerprint { get; init; }
}
