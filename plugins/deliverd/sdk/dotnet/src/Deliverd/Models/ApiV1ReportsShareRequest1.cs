using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.AnyOf;

namespace Deliverd.Models;

public record ApiV1ReportsShareRequest1
{
    [JsonPropertyName("audience")]
    public required IReadOnlyList<Audience1> Audience { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
