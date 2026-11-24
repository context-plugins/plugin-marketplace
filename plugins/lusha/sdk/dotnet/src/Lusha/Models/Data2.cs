using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Data2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added")]
    public int? Added { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alreadyPresent")]
    public int? AlreadyPresent { get; init; }

    /// <summary>
    /// IDs that couldn't be resolved. Not an error — the call still returns <c>200</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invalidIds")]
    public IReadOnlyList<string>? InvalidIds { get; init; }

    /// <summary>
    /// Where and by whom a row was added to the table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addedBy")]
    public AddedBy? AddedBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
