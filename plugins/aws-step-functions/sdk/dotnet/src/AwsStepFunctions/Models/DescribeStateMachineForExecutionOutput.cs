using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record DescribeStateMachineForExecutionOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine associated with the execution.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The name of the state machine associated with the execution.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The Amazon States Language definition of the state machine. See Amazon States Language.
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution.
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// The date and time the state machine associated with an execution was updated. For a newly created state machine, this is the creation date.
    /// </summary>
    [JsonPropertyName("updateDate")]
    public required DateTimeOffset UpdateDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfiguration")]
    public LoggingConfiguration? LoggingConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tracingConfiguration")]
    public TracingConfiguration? TracingConfiguration { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned only if the executionArn is a child workflow execution that was started by a Distributed Map state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunArn")]
    public string? MapRunArn { get; init; }

    /// <summary>
    /// A user-defined or an auto-generated string that identifies a Map state. This field is returned only if the executionArn is a child workflow execution that was started by a Distributed Map state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// The revision identifier for the state machine. The first revision ID when you create the state machine is null. Use the state machine revisionId parameter to compare the revision of a state machine with the configuration of the state machine used for executions without performing a diff of the properties, such as definition and roleArn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    /// <summary>
    /// A map of state name to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variableReferences")]
    public IReadOnlyDictionary<string, object>? VariableReferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
