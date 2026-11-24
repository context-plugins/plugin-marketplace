using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Models.Enums;

namespace Airtable.Models;

public record Operation
{
    /// <summary>
    /// The operation type.
    /// </summary>
    [JsonPropertyName("op")]
    public required Op Op { get; init; }

    /// <summary>
    /// The attribute path to operate on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// The value to set for add and replace operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
