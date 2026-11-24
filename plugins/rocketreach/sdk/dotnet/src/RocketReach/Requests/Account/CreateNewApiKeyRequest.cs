namespace RocketReach.Requests.Account;

/// <summary>
/// The inputs of the CreateNewApiKey operation.
/// </summary>
public sealed record CreateNewApiKeyRequest
{
    /// <summary>
    /// The API key for your account. You can also find your API key <see href="https://rocketreach.co/account?section=nav_gen_api">here</see>.
    /// </summary>
    public string? ApiKey { get; init; }
}
