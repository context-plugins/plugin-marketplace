namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Phonenumbervalidator operation.
/// </summary>
public sealed record PhonenumbervalidatorRequest
{
    /// <summary>
    /// The phone number to validate
    /// </summary>
    public required string Number { get; init; }

    /// <summary>
    /// The country code of the phone number (e.g., us, uk)
    /// </summary>
    public required string Country { get; init; }
}
