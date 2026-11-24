namespace Basiq.Requests.Consents;

/// <summary>
/// The inputs of the DeleteConsent operation.
/// </summary>
public sealed record DeleteConsentRequest
{
    /// <summary>
    /// User identification.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Consent identification.
    /// </summary>
    public required string ConsentId { get; init; }
}
