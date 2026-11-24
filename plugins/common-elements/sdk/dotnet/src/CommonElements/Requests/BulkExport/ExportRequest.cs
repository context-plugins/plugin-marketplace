namespace CommonElements.Requests.BulkExport;

/// <summary>
/// The inputs of the Export operation.
/// </summary>
public sealed record ExportRequest
{
    /// <summary>
    /// One of: associations, vendors, statutes, building-safety, report-card.
    /// </summary>
    public required string Resource { get; init; }

    /// <summary>
    /// "csv" (default) or "json".
    /// </summary>
    public string? Format { get; init; }

    /// <summary>
    /// Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid set for that resource.
    /// </summary>
    public string? Columns { get; init; }

    /// <summary>
    /// Two-letter state code. Every resource supports this filter.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes).
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// County filter. Supported by associations, vendors, and building-safety.
    /// </summary>
    public string? County { get; init; }

    /// <summary>
    /// "hoa", "condo", or "coop". Supported by associations and building-safety.
    /// </summary>
    public string? Subtype { get; init; }

    /// <summary>
    /// Vendor category slug. Vendors only.
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Unit count range. Associations only.
    /// </summary>
    public double? UnitMinUnitMax { get; init; }

    /// <summary>
    /// Year-built range. Associations only.
    /// </summary>
    public double? YearMinYearMax { get; init; }

    /// <summary>
    /// "true" or "false". Associations only.
    /// </summary>
    public bool? IsClaimed { get; init; }

    /// <summary>
    /// Management firm name filter. Associations only.
    /// </summary>
    public string? Mgmt { get; init; }

    /// <summary>
    /// Statutes only, same meaning as on /v1/statutes/by-state.
    /// </summary>
    public string? ChapterTopic { get; init; }

    /// <summary>
    /// "true" or "false". Building-safety only.
    /// </summary>
    public bool? SirsOnFileElevatorDelinquent { get; init; }

    /// <summary>
    /// Free-text, matches the source county/agency's own vocabulary. Building-safety only.
    /// </summary>
    public string? MilestoneStatusPoolLastResult { get; init; }

    /// <summary>
    /// "true" or "false". Report-card only.
    /// </summary>
    public bool? HasSirsHasElevatorCert { get; init; }

    /// <summary>
    /// Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.
    /// </summary>
    public string? FhaStatus { get; init; }

    /// <summary>
    /// FEMA NRI county risk score range. Report-card only.
    /// </summary>
    public double? MinRiskMaxRisk { get; init; }
}
