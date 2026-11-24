using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record ValidateStateMachineDefinitionOutput
{
    /// <summary>
    /// The result value will be OK when no syntax errors are found, or FAIL if the workflow definition does not pass verification.
    /// </summary>
    [JsonPropertyName("result")]
    public required Result Result { get; init; }

    /// <summary>
    /// An array of diagnostic errors and warnings found during validation of the state machine definition. Since warnings do not prevent deploying your workflow definition, the result value could be OK even when warning diagnostics are present in the response.
    /// </summary>
    [JsonPropertyName("diagnostics")]
    public required IReadOnlyList<ValidateStateMachineDefinitionDiagnostic> Diagnostics { get; init; }

    /// <summary>
    /// The result value will be true if the number of diagnostics found in the workflow definition exceeds maxResults. When all diagnostics results are returned, the value will be false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
