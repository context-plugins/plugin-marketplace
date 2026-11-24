namespace Divvy.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the GetSessionInfo operation.
/// </summary>
public sealed record GetSessionInfoRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
