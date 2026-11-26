using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Dto for additional information needed when sending invite to organization in Rpps network.
/// </summary>
public record RppsInformation
{
    /// <summary>
    /// Your billing statement account number with the verified national vendor organization.
    /// <para>
    /// This value must match the vendor <c>accountNumber</c> set while creating or updating a vendor.
    /// </para>
    /// </summary>
    [JsonPropertyName("accountNumber")]
    [MinLength(1)]
    public required string AccountNumber { get; init; }

    /// <summary>
    /// BILL-generated ID of the billing address for the verified national vendor organization. The value begins with <c>0ra</c>. Each address is identified by a unique ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressId")]
    public string? AddressId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
