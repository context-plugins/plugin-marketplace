using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for parameter validation.
/// </summary>
public record ParameterValidation
{
    /// <summary>
    /// Validation based on a list of allowed values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public ValueValidation? Values { get; init; }

    /// <summary>
    /// Validation based on regular expressions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regex")]
    public RegexValidation? Regex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
