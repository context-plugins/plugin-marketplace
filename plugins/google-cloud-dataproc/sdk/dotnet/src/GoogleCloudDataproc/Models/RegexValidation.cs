using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Validation based on regular expressions.
/// </summary>
public record RegexValidation
{
    /// <summary>
    /// Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regexes")]
    public IReadOnlyList<string>? Regexes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
