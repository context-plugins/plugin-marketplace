namespace Contentstack.Requests.ManifestApi;

/// <summary>
/// The inputs of the GetManifest operation.
/// </summary>
public sealed record GetManifestRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    /// <summary>
    /// The unique identifier for the end user. If not provided, a new anonymous user will be created and the UID returned in the response headers.
    /// </summary>
    public string? XCsPersonalizeUserUid { get; init; }

    /// <summary>
    /// Original client IP address for geolocation-based targeting.
    /// </summary>
    public string? XForwardedFor { get; init; }

    /// <summary>
    /// User agent string for device-based targeting rules.
    /// </summary>
    public string? UserAgent { get; init; }

    /// <summary>
    /// Referring URL for referral-based audience rules.
    /// </summary>
    public string? Referer { get; init; }

    /// <summary>
    /// Current page URL for page-based audience targeting rules.
    /// </summary>
    public string? XPageUrl { get; init; }

    /// <summary>
    /// JSON-encoded object of real-time attribute values to evaluate audience rules against without persisting them.
    /// </summary>
    public string? XLiveAttributes { get; init; }
}
