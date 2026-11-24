using System.ComponentModel.DataAnnotations;

namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostGetByReferenceKey operation.
/// </summary>
public sealed record PostGetByReferenceKeyRequest
{
    [StringLength(128, MinimumLength = 1)]
    public required string ReferenceKey { get; init; }
}
