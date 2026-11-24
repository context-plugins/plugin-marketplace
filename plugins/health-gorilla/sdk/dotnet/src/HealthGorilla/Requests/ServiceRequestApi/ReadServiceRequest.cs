namespace HealthGorilla.Requests.ServiceRequestApi;

/// <summary>
/// The inputs of the ReadServiceRequest operation.
/// </summary>
public sealed record ReadServiceRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
