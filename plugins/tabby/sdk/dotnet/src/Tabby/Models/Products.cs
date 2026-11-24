using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Products and theirs availability
/// </summary>
public record Products
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installments")]
    public CheckoutProduct? Installments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
