namespace Basiq.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the PostToken operation.
/// </summary>
public sealed record PostTokenRequest
{
    public required string BasiqVersion { get; init; }

    public string? Scope { get; init; }

    public string? UserId { get; init; }
}
