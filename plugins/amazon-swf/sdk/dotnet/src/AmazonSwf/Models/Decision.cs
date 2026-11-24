using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record Decision
{
    /// <summary>
    /// Specifies the type of the decision.
    /// </summary>
    [JsonPropertyName("decisionType")]
    public required DecisionType DecisionType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleActivityTaskDecisionAttributes")]
    public ScheduleActivityTaskDecisionAttributes? ScheduleActivityTaskDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCancelActivityTaskDecisionAttributes")]
    public RequestCancelActivityTaskDecisionAttributes? RequestCancelActivityTaskDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completeWorkflowExecutionDecisionAttributes")]
    public CompleteWorkflowExecutionDecisionAttributes? CompleteWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failWorkflowExecutionDecisionAttributes")]
    public FailWorkflowExecutionDecisionAttributes? FailWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelWorkflowExecutionDecisionAttributes")]
    public CancelWorkflowExecutionDecisionAttributes? CancelWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueAsNewWorkflowExecutionDecisionAttributes")]
    public ContinueAsNewWorkflowExecutionDecisionAttributes? ContinueAsNewWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordMarkerDecisionAttributes")]
    public RecordMarkerDecisionAttributes? RecordMarkerDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimerDecisionAttributes")]
    public StartTimerDecisionAttributes? StartTimerDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelTimerDecisionAttributes")]
    public CancelTimerDecisionAttributes? CancelTimerDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalExternalWorkflowExecutionDecisionAttributes")]
    public SignalExternalWorkflowExecutionDecisionAttributes? SignalExternalWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCancelExternalWorkflowExecutionDecisionAttributes")]
    public RequestCancelExternalWorkflowExecutionDecisionAttributes? RequestCancelExternalWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startChildWorkflowExecutionDecisionAttributes")]
    public StartChildWorkflowExecutionDecisionAttributes? StartChildWorkflowExecutionDecisionAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleLambdaFunctionDecisionAttributes")]
    public ScheduleLambdaFunctionDecisionAttributes? ScheduleLambdaFunctionDecisionAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
