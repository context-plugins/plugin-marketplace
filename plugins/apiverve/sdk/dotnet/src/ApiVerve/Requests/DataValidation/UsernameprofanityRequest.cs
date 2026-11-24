namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Usernameprofanity operation.
/// </summary>
public sealed record UsernameprofanityRequest
{
    /// <summary>
    /// The username to check if it is inappropriate or profane
    /// </summary>
    public required string Username { get; init; }
}
