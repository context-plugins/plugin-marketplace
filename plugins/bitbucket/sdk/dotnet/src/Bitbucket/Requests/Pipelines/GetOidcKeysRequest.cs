namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetOidcKeys operation.
/// </summary>
public sealed record GetOidcKeysRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
