namespace HealthGorilla.Requests.ServiceRequestApi;

/// <summary>
/// The inputs of the SearchServiceRequests operation.
/// </summary>
public sealed record SearchServiceRequestsRequest
{
    /// <summary>
    /// Reference to the subject Patient (e.g. Patient/{id}).
    /// </summary>
    public string? Patient { get; init; }

    public string? Status { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
