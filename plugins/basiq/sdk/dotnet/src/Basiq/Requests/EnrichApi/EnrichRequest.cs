namespace Basiq.Requests.EnrichApi;

/// <summary>
/// The inputs of the Enrich operation.
/// </summary>
public sealed record EnrichRequest
{
    /// <summary>
    /// This is the search string that is used to lookup the entity (merchant) information.
    /// <code>
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// Identifies the institution from where the transaction was derived. This must be a Basiq recognisable institution ID.
    /// <code>
    /// </summary>
    public required string Institution { get; init; }

    /// <summary>
    /// Specifies the country the search should be narrowed down to. Passing in a country value will limit the search to the specified country. The country must be in ISO 3166 Alpha-2 format
    /// <code>
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Merchant classification code as defined by Visa and Mastercard
    /// <code>
    /// </summary>
    public string? Mcc { get; init; }

    /// <summary>
    /// The Account type from which the transaction was derived.
    /// <code>
    /// **Valid values:**
    /// - `transaction` - `credit-card` - `savings` - `mortgage` - `loan` - `foreign`
    /// </summary>
    public string? AccountType { get; init; }

    /// <summary>
    /// The dollar/cent amount relevant to the transaction.
    /// <code>
    /// </summary>
    public string? Amount { get; init; }
}
