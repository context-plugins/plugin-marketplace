namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Passwordstrength operation.
/// </summary>
public sealed record PasswordstrengthRequest
{
    /// <summary>
    /// The password to check the strength of
    /// </summary>
    public required string Password { get; init; }
}
