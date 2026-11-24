namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the PostApiV1UsersUserIdDisable operation.
/// </summary>
public sealed record PostApiV1UsersUserIdDisableRequest
{
    public required string UserId { get; init; }
}
