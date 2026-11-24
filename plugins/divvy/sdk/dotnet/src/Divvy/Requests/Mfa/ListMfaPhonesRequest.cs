namespace Divvy.Requests.Mfa;

/// <summary>
/// The inputs of the ListMfaPhones operation.
/// </summary>
public sealed record ListMfaPhonesRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
