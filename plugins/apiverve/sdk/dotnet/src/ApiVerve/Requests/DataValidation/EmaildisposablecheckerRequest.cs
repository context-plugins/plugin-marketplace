namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Emaildisposablechecker operation.
/// </summary>
public sealed record EmaildisposablecheckerRequest
{
    /// <summary>
    /// The email address to check (e.g., support@myspace.com)
    /// </summary>
    public required string Email { get; init; }
}
