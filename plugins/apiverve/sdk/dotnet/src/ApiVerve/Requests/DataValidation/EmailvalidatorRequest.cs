namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Emailvalidator operation.
/// </summary>
public sealed record EmailvalidatorRequest
{
    /// <summary>
    /// The email address to validate (e.g., support@myspace.com)
    /// </summary>
    public required string Email { get; init; }
}
