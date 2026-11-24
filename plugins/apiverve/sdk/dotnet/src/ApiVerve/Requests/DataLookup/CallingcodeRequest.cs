namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Callingcode operation.
/// </summary>
public sealed record CallingcodeRequest
{
    /// <summary>
    /// The 2 letter ISO code for the country (e.g. FR)
    /// </summary>
    public required string Country { get; init; }
}
