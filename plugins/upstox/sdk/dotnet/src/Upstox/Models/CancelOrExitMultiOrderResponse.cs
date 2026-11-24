using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record CancelOrExitMultiOrderResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Response data for cancel or exit order request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public CancelOrExitMultiOrderData2? Data { get; init; }

    /// <summary>
    /// Error data for cancel or exit order request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<CancelOrExitOrderErrorData>? Errors { get; init; }

    /// <summary>
    /// Execution summary for cancel or exit order request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public BatchExecutionSummary1? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
