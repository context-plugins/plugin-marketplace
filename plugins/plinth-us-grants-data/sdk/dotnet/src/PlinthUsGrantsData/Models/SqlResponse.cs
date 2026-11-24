using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// <c>truncated</c> is the one to check: true means the row cap cut the answer, so aggregate in SQL.
/// </summary>
public record SqlResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    [JsonPropertyName("rows")]
    public required IReadOnlyList<object> Rows { get; init; }

    [JsonPropertyName("row_count")]
    public required int RowCount { get; init; }

    [JsonPropertyName("truncated")]
    public required bool Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
