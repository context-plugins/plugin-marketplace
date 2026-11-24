using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record IamDiff
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missing")]
    public IReadOnlyList<string>? Missing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public IReadOnlyList<string>? Extra { get; init; }
}
