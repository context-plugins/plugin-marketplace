using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record ApiV2PaymentsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public OrderTabbyApiReferencePaymentsApi? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
