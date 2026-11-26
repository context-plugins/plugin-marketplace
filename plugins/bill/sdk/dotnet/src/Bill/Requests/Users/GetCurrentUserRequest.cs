namespace Bill.Requests.Users;

/// <summary>
/// The inputs of the GetCurrentUser operation.
/// </summary>
public sealed record GetCurrentUserRequest
{
    public string? ApiToken { get; init; }
}
