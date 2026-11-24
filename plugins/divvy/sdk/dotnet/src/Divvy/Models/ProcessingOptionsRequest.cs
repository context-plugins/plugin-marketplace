using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// User provided options for processing the payments request.
/// </summary>
public record ProcessingOptionsRequest
{
    /// <summary>
    /// Set as <c>true</c> to use BILL Pay Faster. This field is required if <c>requestCheckDeliveryType</c> is set.
    /// <para>
    ///   See <see href="https://developer.bill.com/docs/ap-payments">Payments</see>   in the Guides section for information about BILL Pay Faster payments.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestPayFaster")]
    public bool? RequestPayFaster { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set as <c>false</c> to create a vendor payment for an existing bill.</description></item>
    ///   <item><description>Set as <c>true</c> to create a bill for a vendor payment. If <c>createBill</c> is <c>true</c>, do not set <c>billId</c> in your payment request.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createBill")]
    public bool? CreateBill { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCheckDeliveryType")]
    public CheckDeliveryTypeRequest? RequestCheckDeliveryType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
