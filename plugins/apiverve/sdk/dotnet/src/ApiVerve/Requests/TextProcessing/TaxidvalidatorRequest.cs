namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Taxidvalidator operation.
/// </summary>
public sealed record TaxidvalidatorRequest
{
    /// <summary>
    /// The US Tax ID to validate (SSN, EIN, or ITIN format)
    /// </summary>
    public required string Taxid { get; init; }
}
