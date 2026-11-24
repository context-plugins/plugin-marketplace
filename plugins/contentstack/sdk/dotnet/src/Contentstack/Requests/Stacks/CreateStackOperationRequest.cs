using Contentstack.Models;

namespace Contentstack.Requests.Stacks;

/// <summary>
/// The inputs of the CreateStack operation.
/// </summary>
public sealed record CreateStackOperationRequest
{
    /// <summary>
    /// The UID of the organization in which to create the stack.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required CreateStackRequest Body { get; init; }
}
