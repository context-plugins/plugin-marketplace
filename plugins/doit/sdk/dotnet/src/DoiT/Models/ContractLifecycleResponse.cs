using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Result of an activate or cancel operation.
/// </summary>
public record ContractLifecycleResponse
{
    /// <summary>
    /// The contract identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contractId")]
    public string? ContractId { get; init; }

    /// <summary>
    /// The contract status after the operation (<c>active</c>, <c>scheduled</c>, or <c>cancelled</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusDoiTContractsApi? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
