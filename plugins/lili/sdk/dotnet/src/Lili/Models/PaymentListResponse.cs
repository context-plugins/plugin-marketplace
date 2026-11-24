using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

public record PaymentListResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentItemResponseList")]
    public IReadOnlyList<PaymentListItemResponse>? PaymentItemResponseList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
