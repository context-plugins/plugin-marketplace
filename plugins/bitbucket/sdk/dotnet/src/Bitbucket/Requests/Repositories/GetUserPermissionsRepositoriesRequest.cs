namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the GetUserPermissionsRepositories operation.
/// </summary>
public sealed record GetUserPermissionsRepositoriesRequest
{
    /// <summary>
    /// Query string to narrow down the response as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Name of a response property sort the result by as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Sort { get; init; }
}
