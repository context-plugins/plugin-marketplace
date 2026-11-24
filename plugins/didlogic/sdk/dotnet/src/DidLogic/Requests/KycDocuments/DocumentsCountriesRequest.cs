namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsCountries operation.
/// </summary>
public sealed record DocumentsCountriesRequest
{
    /// <summary>
    /// Filter countries by name pattern (case-insensitive substring match)
    /// </summary>
    public string? NameContains { get; init; }
}
