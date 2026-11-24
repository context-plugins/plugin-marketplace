using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreatePlanRequest
{
    /// <summary>
    /// Paid product ID, for example <c>prod_abc123</c>
    /// </summary>
    [JsonPropertyName("productId")]
    public required string ProductId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Your stable identifier for this plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    public string? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportedCurrencies")]
    public IReadOnlyList<string>? SupportedCurrencies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isDefault")]
    public bool? IsDefault { get; init; }

    [JsonPropertyName("attributes")]
    public required IReadOnlyList<PlanAttributeInput> Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
