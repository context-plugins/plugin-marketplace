using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Validation rules to be applied to this parameter's value.
/// </summary>
public record ParameterValidation1
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
