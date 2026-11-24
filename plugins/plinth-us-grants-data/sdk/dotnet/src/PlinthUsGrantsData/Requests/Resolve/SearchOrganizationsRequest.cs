using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Requests.Resolve;

/// <summary>
/// The inputs of the SearchOrganizations operation.
/// </summary>
public sealed record SearchOrganizationsRequest
{
    /// <summary>
    /// Search text. Fewer than 2 characters returns an empty result set.
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// Narrow to a US state, two-letter code.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.
    /// </summary>
    public ModeEnum Mode { get; init; } = ModeEnum.Text;
}
