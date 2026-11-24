using LastDatabase.Core.Validation.Attributes;
using LastDatabase.Models.Enums;

namespace LastDatabase.Requests;

/// <summary>
/// The inputs of the SearchLeads operation.
/// </summary>
public sealed record SearchLeadsRequest
{
    /// <summary>
    /// Lead inventory type. Defaults to email.
    /// <para>
    /// The current implementation falls back to email when
    /// an unrecognized type value is supplied.
    /// </para>
    /// </summary>
    public TypeEnum Type { get; init; } = TypeEnum.Email;

    /// <summary>
    /// Filter results by country.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Filter results by city.
    /// </summary>
    public string? City { get; init; }

    /// <summary>
    /// Filter by industry. For phone inventory, this
    /// parameter maps to the phone category field.
    /// </summary>
    public string? Industry { get; init; }

    /// <summary>
    /// Keyword filter.
    /// <para>
    /// Email keyword matching covers country, city,
    /// industry, and company name.
    /// </para>
    /// <para>
    /// Phone keyword matching covers country, city,
    /// and category.
    /// </para>
    /// <para>
    /// Fax keyword matching covers country, city,
    /// industry, and company name.
    /// </para>
    /// </summary>
    public string? Keyword { get; init; }

    /// <summary>
    /// Number of records to return.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 25;
}
