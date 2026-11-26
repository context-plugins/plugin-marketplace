using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Common payment information POJO.
/// </summary>
public record PaymentInformationCommon
{
    /// <summary>
    /// Vendor name for check and electronic payments. This field is overridden when you connect with a vendor in the BILL network.
    /// </summary>
    [JsonPropertyName("payeeName")]
    [RegularExpression("^.{3,100}$")]
    public required string PayeeName { get; init; }

    /// <summary>
    /// Vendor email address for receiving payment information. BILL uses the vendor <c>email</c> value when this payment <c>email</c> value is not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
