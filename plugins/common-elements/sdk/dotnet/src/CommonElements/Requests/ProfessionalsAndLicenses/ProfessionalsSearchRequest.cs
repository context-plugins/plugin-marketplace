namespace CommonElements.Requests.ProfessionalsAndLicenses;

/// <summary>
/// The inputs of the ProfessionalsSearch operation.
/// </summary>
public sealed record ProfessionalsSearchRequest
{
    /// <summary>
    /// Licensee name, substring match. Minimum 2 characters.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Two-letter state code.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Exact license type, e.g. "CAM".
    /// </summary>
    public string? LicenseType { get; init; }

    /// <summary>
    /// Exact issuing board name.
    /// </summary>
    public string? Board { get; init; }

    /// <summary>
    /// Exact board status.
    /// </summary>
    public string? Status { get; init; }

    /// <summary>
    /// Rows to return, 1 to 100 (default 25).
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
