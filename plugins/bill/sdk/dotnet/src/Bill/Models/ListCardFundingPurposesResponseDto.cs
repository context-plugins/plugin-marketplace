using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Card funding purposes dto.
/// </summary>
public record ListCardFundingPurposesResponseDto
{
    /// <summary>
    /// Last used purpose. This value was last used as the <c>cardFundingPurpose</c> value in a payment request.
    /// <para>
    /// <b>Note</b>: This field is available only for the AMEX, VISA, and MASTERCARD card brands.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUsedPurpose")]
    public string? LastUsedPurpose { get; init; }

    /// <summary>
    /// List of card funding purpose values based on the vendor and card brand. Use a <c>subCategories</c> value for an AMEX, VISA, or MASTERCARD card brand. Use a <c>category</c> value for all other card brands.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<FundingPurpose>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
