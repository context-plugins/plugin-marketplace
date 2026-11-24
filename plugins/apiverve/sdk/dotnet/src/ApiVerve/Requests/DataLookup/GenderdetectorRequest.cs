namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Genderdetector operation.
/// </summary>
public sealed record GenderdetectorRequest
{
    /// <summary>
    /// The name for which you want to detect the gender
    /// </summary>
    public required string Name { get; init; }

    /// <summary>
    /// The country code for the name (e.g., US). Recorded and echoed back in the response, but detection does not yet vary by country - the same name returns the same gender whichever code you pass
    /// </summary>
    public string? Country { get; init; }
}
