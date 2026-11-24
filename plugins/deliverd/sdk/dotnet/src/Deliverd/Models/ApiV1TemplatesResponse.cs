using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1TemplatesResponse
{
    [JsonPropertyName("templates")]
    public required IReadOnlyList<TemplateDeliverdDevTemplatesApi> Templates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
