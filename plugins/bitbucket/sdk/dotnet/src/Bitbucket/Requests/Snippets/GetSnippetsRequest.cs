using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the GetSnippets operation.
/// </summary>
public sealed record GetSnippetsRequest
{
    /// <summary>
    /// Filter down the result based on the authenticated user's role (<c>owner</c>, <c>contributor</c>, or <c>member</c>).
    /// </summary>
    public RoleBitbucketSnippetsApi? Role { get; init; }
}
