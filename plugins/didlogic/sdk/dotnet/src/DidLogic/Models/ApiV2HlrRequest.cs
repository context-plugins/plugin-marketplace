using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2HlrRequest
{
    /// <summary>
    /// Array of phone numbers in E.164 format (e.g. +14155552671)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numbers")]
    public IReadOnlyList<string>? Numbers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
