namespace CommonElements.Requests.ProfessionalsAndLicenses;

/// <summary>
/// The inputs of the LicensesVerify operation.
/// </summary>
public sealed record LicensesVerifyRequest
{
    /// <summary>
    /// Two-letter state code.
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// Exact license number. Provide this or name.
    /// </summary>
    public string? LicenseNumber { get; init; }

    /// <summary>
    /// Licensee name, substring match. Provide this or license_number.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Substring filter on license type, e.g. "CAM".
    /// </summary>
    public string? LicenseType { get; init; }

    /// <summary>
    /// Max results, 1 to 25 (default 10).
    /// </summary>
    public double? Limit { get; init; }
}
