using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;

namespace Paid.Models;

public record OrderLineCreate
{
    /// <summary>
    /// Paid's internal ID for the product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productId")]
    public string? ProductId { get; init; }

    /// <summary>
    /// The external ID of the product i.e. the id within your system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productExternalId")]
    public string? ProductExternalId { get; init; }

    /// <summary>
    /// DEPRECATED: Use productId instead. Paid's internal ID for the agent/product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentId")]
    public string? AgentId { get; init; }

    /// <summary>
    /// DEPRECATED: Use productExternalId instead. The external ID of the agent/product i.e. the id within your system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentExternalId")]
    public string? AgentExternalId { get; init; }

    /// <summary>
    /// Name of the order line
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Description of the order line
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional array of custom product attributes to override default pricing, allowing per customer pricing. If not provided, attributes will be auto-generated from the product definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProductAttribute")]
    public IReadOnlyList<OrderLineAttributeCreate>? ProductAttribute { get; init; }

    /// <summary>
    /// DEPRECATED: Use ProductAttribute instead. Optional array of custom agent attributes to override default pricing, allowing per customer pricing. If not provided, attributes will be auto-generated from the product definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentAttributes")]
    public IReadOnlyList<OrderLineAttributeCreate>? AgentAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
