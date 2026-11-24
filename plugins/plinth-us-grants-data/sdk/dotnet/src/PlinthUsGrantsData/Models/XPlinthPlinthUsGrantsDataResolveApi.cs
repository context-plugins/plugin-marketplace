using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Present only when something needs saying: <c>warnings[]</c> names any parameter this endpoint does not accept or could not honour, and <c>unsupported[]</c> lists the fatal ones. Same shape as the grant endpoints.
/// </summary>
public record XPlinthPlinthUsGrantsDataResolveApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public IReadOnlyList<Warning>? Warnings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsupported")]
    public IReadOnlyList<string>? Unsupported { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
