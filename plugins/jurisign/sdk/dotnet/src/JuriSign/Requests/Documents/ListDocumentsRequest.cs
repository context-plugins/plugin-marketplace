using JuriSign.Models.Enums;

namespace JuriSign.Requests.Documents;

/// <summary>
/// The inputs of the ListDocuments operation.
/// </summary>
public sealed record ListDocumentsRequest
{
    /// <summary>
    /// Filter by document status
    /// </summary>
    public StatusJuriSignDocumentsApi? Status { get; init; }

    /// <summary>
    /// Search by document title
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// Results per page (default: 20, max: 100)
    /// </summary>
    public int PerPage { get; init; } = 20;

    /// <summary>
    /// Page number
    /// </summary>
    public int Page { get; init; } = 1;
}
