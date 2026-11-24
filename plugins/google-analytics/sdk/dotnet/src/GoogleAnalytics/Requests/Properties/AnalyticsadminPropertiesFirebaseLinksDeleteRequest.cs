namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesFirebaseLinksDelete operation.
/// </summary>
public sealed record AnalyticsadminPropertiesFirebaseLinksDeleteRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (firebaseLinksId).
    /// </summary>
    public required string FirebaseLinksId { get; init; }
}
