namespace HealthGorilla.Requests.DocumentReferenceApi;

/// <summary>
/// The inputs of the ReadDocumentReference operation.
/// </summary>
public sealed record ReadDocumentReferenceRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
