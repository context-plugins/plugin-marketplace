using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record MockInput
{
    /// <summary>
    /// A JSON string containing the mocked result of the state invocation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public string? Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorOutput")]
    public MockErrorOutput? ErrorOutput { get; init; }

    /// <summary>
    /// Determines the level of strictness when validating mocked results against their respective API models. Values include: STRICT: All required fields must be present, and all present fields must conform to the API's schema. PRESENT: All present fields must conform to the API's schema. NONE: No validation is performed. If no value is specified, the default value is STRICT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fieldValidationMode")]
    public FieldValidationMode? FieldValidationMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
