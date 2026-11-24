using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// One column's value on a single row, as returned by Get Entities. This shape is a passthrough from the underlying Workspace service — the fields shown here (<c>id</c>, <c>name</c>, <c>type</c>, <c>sourceType</c>, <c>value</c>, <c>status</c>) are representative, not an exhaustive schema.
/// </summary>
public record EntityColumnValue
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceType")]
    public string? SourceType { get; init; }

    /// <summary>
    /// The cell's data. Shape depends on the column type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    /// <summary>
    /// Current state of a single cell's data. <c>no_data</c> means the run succeeded but found nothing — distinct from <c>failed</c>, which means the run itself errored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public CellStatus? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
