namespace Skribble.Requests.Access;

/// <summary>
/// The inputs of the AccessLogin operation.
/// </summary>
public sealed record AccessLoginRequest
{
    /// <summary>
    /// The username of the users credentials to login
    /// </summary>
    public required string Username { get; init; }

    /// <summary>
    /// The API key of the users credentials to login
    /// </summary>
    public required string ApiKey { get; init; }
}
