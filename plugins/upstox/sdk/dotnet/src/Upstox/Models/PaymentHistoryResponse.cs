using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record PaymentHistoryResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// List of payment history records
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<PaymentHistoryData>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
