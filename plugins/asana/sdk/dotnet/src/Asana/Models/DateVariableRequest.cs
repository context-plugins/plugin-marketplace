using System;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record DateVariableRequest
{
    /// <summary>
    /// Globally unique identifier of the date field in the project template. A value of <c>1</c> refers to the project start date, while <c>2</c> refers to the project due date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The date with which the date variable should be replaced when instantiating a project. This takes a date with <c>YYYY-MM-DD</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public DateTimeOffset? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
