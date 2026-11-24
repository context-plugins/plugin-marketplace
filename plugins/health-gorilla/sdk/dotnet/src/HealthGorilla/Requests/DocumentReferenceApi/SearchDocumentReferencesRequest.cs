namespace HealthGorilla.Requests.DocumentReferenceApi;

/// <summary>
/// The inputs of the SearchDocumentReferences operation.
/// </summary>
public sealed record SearchDocumentReferencesRequest
{
    /// <summary>
    /// Reference to the subject Patient (e.g. Patient/{id}).
    /// </summary>
    public string? Patient { get; init; }

    public string? Type { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
