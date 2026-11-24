using System;
using System.Text.Json.Serialization;
using Semrush.Core.Models;
using Semrush.Core.Validation.Attributes;

namespace Semrush.Models;

public record ViewerActiveProduct
{
    /// <summary>
    /// UUID of product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Amount of bought product (1 for one-time products, &gt;1 in other cases)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    [Minimum(0)]
    public int? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
