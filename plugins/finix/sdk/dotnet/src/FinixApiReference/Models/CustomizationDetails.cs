using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Custom attributes and free-form text sections to display on the PDF receipt.
/// <para>
/// <c>customization_details.subheader_attributes</c> is mutually exclusive with <c>additional_details</c>. Passing both in the request results in an error.
/// </para>
/// </summary>
public record CustomizationDetails
{
    /// <summary>
    /// Free-text sections displayed below the line items of the PDF receipt. For example, you can include a custom footer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("footer_sections")]
    [MaxLength(5)]
    public IReadOnlyList<FooterSection>? FooterSections { get; init; }

    /// <summary>
    /// Fields shown near the top of the PDF, such as an invoice number or order ID.
    /// <para>
    /// <c>customization_details.subheader_attributes</c> is mutually exclusive with <c>additional_details</c>. Passing both in the request results in an error.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subheader_attributes")]
    [MaxLength(5)]
    public IReadOnlyList<SubheaderAttribute>? SubheaderAttributes { get; init; }

    /// <summary>
    /// Free-text sections displayed above the line items of the PDF receipt, such as payment instructions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary_sections")]
    [MaxLength(5)]
    public IReadOnlyList<SummarySection>? SummarySections { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
