using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record ServiceOptionsResponse
{
    /// <summary>
    /// Available service option time slots for the requested fulfillment type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_options")]
    public IReadOnlyList<ServiceOption>? ServiceOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
