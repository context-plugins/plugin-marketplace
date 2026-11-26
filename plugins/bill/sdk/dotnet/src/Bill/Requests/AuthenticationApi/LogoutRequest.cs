namespace Bill.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the Logout operation.
/// </summary>
public sealed record LogoutRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
