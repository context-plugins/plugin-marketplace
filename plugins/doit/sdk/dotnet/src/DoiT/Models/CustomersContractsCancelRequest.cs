using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CustomersContractsCancelRequest
{
    /// <summary>
    /// Optional cancellation reason.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
