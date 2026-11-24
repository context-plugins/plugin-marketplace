using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record ValidateStateMachineDefinitionDiagnostic
{
    /// <summary>
    /// A value of ERROR means that you cannot create or update a state machine with this definition. WARNING level diagnostics alert you to potential issues, but they will not prevent you from creating or updating your state machine.
    /// </summary>
    [JsonPropertyName("severity")]
    public required Severity Severity { get; init; }

    /// <summary>
    /// Identifying code for the diagnostic.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Message describing the diagnostic condition.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Location of the issue in the state machine, if available. For errors specific to a field, the location could be in the format: /States//, for example: /States/FailState/ErrorPath.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
