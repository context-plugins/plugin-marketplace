using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record StateMachineListItem
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the state machine.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ &amp; , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("type")]
    public required Type4 Type { get; init; }

    /// <summary>
    /// The date the state machine is created.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
