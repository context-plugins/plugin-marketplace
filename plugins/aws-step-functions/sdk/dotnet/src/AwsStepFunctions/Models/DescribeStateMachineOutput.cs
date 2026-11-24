using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record DescribeStateMachineOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the state machine. If you specified a state machine version ARN in your request, the API returns the version ARN. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ &amp; , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The current status of the state machine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status2? Status { get; init; }

    /// <summary>
    /// The Amazon States Language definition of the state machine. See Amazon States Language. If called with includedData = METADATA_ONLY, the returned definition will be {}.
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role maintains security by granting Step Functions access to Amazon Web Services resources.)
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// The type of the state machine (STANDARD or EXPRESS).
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// The date the state machine is created. For a state machine version, creationDate is the date the version was created.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfiguration")]
    public LoggingConfiguration? LoggingConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tracingConfiguration")]
    public TracingConfiguration? TracingConfiguration { get; init; }

    /// <summary>
    /// A user-defined or an auto-generated string that identifies a Map state. This parameter is present only if the stateMachineArn specified in input is a qualified state machine ARN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// The revision identifier for the state machine. Use the revisionId parameter to compare between versions of a state machine configuration used for executions without performing a diff of the properties, such as definition and roleArn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// The description of the state machine version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

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
