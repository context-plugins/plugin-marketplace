using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Users;

/// <summary>
/// The inputs of the ListUsers operation.
/// </summary>
public sealed record ListUsersRequest
{
    public string? NextPage { get; init; }

    public string? PrevPage { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public long? Max { get; init; }

    public string? Filters { get; init; }

    public string? ApiToken { get; init; }
}
