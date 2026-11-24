using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// One grant line as filed. <c>recip_ein</c> is null where we would not stake an EIN on the name.
/// <para>
/// ⚠️ <c>recip_name</c> IS THE REGISTERED NAME WHERE THE EIN RESOLVED, not the string on the filing. The
/// projection is <c>coalesce(registered_name, as_filed)</c>, so a resolved row shows what the IRS calls
/// the organisation and an unresolved row shows what the filer typed. Reconciling a row back to its
/// source filing therefore needs <c>recip_ein</c> and the funder's return, not this field — an external
/// audit read the difference as a substitution specific to one <c>ein_source</c>, which is the shape it
/// presents, though it applies to every resolved row.
/// </para>
/// </summary>
public record GrantTransaction
{
    [JsonPropertyName("funder_ein")]
    public required string FunderEin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funder_name")]
    public FunderName? FunderName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recip_ein")]
    public RecipEin? RecipEin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recip_name")]
    public RecipName? RecipName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recip_city")]
    public RecipCity? RecipCity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recip_state")]
    public RecipState? RecipState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recip_zip")]
    public RecipZip? RecipZip { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recip_country")]
    public RecipCountry? RecipCountry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public Amount? Amount { get; init; }

    /// <summary>
    /// Fiscal year of the FILING, not the payment date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fiscal_year")]
    public FiscalYear? FiscalYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public Subject? Subject { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinthPlinthUsDataGrantsApi? XPlinth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
