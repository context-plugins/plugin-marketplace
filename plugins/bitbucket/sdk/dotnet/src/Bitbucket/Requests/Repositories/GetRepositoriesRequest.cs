using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the GetRepositories operation.
/// </summary>
public sealed record GetRepositoriesRequest
{
    /// <summary>
    /// Filter the results to include only repositories created on or
    /// after this <see href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</see>
    ///  timestamp. Example: <c>YYYY-MM-DDTHH:mm:ss.sssZ</c>
    /// </summary>
    public string? After { get; init; }

    /// <summary>
    /// Filters the result based on the authenticated user's role on each repository.
    /// <list type="bullet">
    ///   <item><description><b>member</b>: returns repositories to which the user has explicit read access</description></item>
    ///   <item><description><b>contributor</b>: returns repositories to which the user has explicit write access</description></item>
    ///   <item><description><b>admin</b>: returns repositories to which the user has explicit administrator access</description></item>
    ///   <item><description><b>owner</b>: returns all repositories owned by the current user</description></item>
    /// </list>
    /// </summary>
    public Role1? Role { get; init; }

    /// <summary>
    /// Query string to narrow down the response as per <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// <c>role</c> parameter must also be specified.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Field by which the results should be sorted as per <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Sort { get; init; }
}
