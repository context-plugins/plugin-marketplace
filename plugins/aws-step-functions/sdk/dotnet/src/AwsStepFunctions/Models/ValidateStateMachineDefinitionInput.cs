using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record ValidateStateMachineDefinitionInput
{
    /// <summary>
    /// The Amazon States Language definition of the state machine. For more information, see Amazon States Language (ASL).
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    /// <summary>
    /// The target type of state machine for this definition. The default is STANDARD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeAwsStepFunctionsOperationsApi? Type { get; init; }

    /// <summary>
    /// Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING returns both WARNING and ERROR diagnostics. The default is ERROR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public Severity1? Severity { get; init; }

    /// <summary>
    /// The maximum number of diagnostics that are returned per call. The default and maximum value is 100. Setting the value to 0 will also use the default of 100. If the number of diagnostics returned in the response exceeds maxResults, the value of the truncated field in the response will be set to true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
