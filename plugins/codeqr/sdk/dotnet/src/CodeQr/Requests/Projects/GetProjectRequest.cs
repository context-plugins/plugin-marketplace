namespace CodeQr.Requests.Projects;

/// <summary>
/// The inputs of the GetProject operation.
/// </summary>
public sealed record GetProjectRequest
{
    /// <summary>
    /// The slug for the project to retrieve. E.g. for <c>app.codeqr.io/acme</c>, the projectSlug is <c>acme</c>.
    /// </summary>
    public required string ProjectSlug { get; init; }
}
