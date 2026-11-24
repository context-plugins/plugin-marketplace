using Soda.Models;

namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the PostApiV1Users operation.
/// </summary>
public sealed record PostApiV1UsersRequest
{
    public required PublicApiInviteUserRequestDto Body { get; init; }
}
