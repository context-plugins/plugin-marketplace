namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Cardvalidator operation.
/// </summary>
public sealed record CardvalidatorRequest
{
    /// <summary>
    /// The card number to validate
    /// </summary>
    public required string Number { get; init; }
}
