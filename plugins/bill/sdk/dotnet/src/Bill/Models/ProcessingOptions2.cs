using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

public record ProcessingOptions2
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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCheckDeliveryType")]
    public CheckDeliveryTypeRequest? RequestCheckDeliveryType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
