using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsResponse4
{
    [JsonPropertyName("report")]
    public required Report Report { get; init; }

    [JsonPropertyName("audience")]
    public required IReadOnlyList<Audience> Audience { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
