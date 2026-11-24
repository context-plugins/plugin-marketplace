namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Salestax operation.
/// </summary>
public sealed record SalestaxRequest
{
    /// <summary>
    /// The zip code for which you want to get the sales tax rate
    /// </summary>
    public required string Zip { get; init; }
}
