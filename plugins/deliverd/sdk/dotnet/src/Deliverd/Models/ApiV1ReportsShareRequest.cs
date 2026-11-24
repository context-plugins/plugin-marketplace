using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.AnyOf;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ReportsShareRequest
{
    [JsonPropertyName("audience")]
    public required IReadOnlyList<Audience1> Audience { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("capability")]
    public Capability? Capability { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
