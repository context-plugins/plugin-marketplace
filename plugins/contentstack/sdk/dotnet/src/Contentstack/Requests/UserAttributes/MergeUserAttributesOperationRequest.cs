using Contentstack.Models;

namespace Contentstack.Requests.UserAttributes;

/// <summary>
/// The inputs of the MergeUserAttributes operation.
/// </summary>
public sealed record MergeUserAttributesOperationRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required MergeUserAttributesRequest Body { get; init; }
}
