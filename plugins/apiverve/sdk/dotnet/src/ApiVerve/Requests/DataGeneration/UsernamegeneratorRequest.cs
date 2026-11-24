namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Usernamegenerator operation.
/// </summary>
public sealed record UsernamegeneratorRequest
{
    /// <summary>
    /// The email address to generate usernames from
    /// </summary>
    public required string Email { get; init; }

    /// <summary>
    /// The number of usernames to generate
    /// </summary>
    public int? Count { get; init; }
}
