using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record CreateStateMachineInput
{
    /// <summary>
    /// The name of the state machine. A name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ &amp; , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The Amazon States Language definition of the state machine. See Amazon States Language.
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the type of a state machine once it has been created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfiguration")]
    public LoggingConfiguration? LoggingConfiguration { get; init; }

    /// <summary>
    /// Tags to be added when creating a state machine. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tracingConfiguration")]
    public TracingConfiguration? TracingConfiguration { get; init; }

    /// <summary>
    /// Set to true to publish the first version of the state machine during creation. The default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish")]
    public bool? Publish { get; init; }

    /// <summary>
    /// Sets description about the state machine version. You can only set the description if the publish parameter is set to true. Otherwise, if you set versionDescription, but publish to false, this API action throws ValidationException.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionDescription")]
    public string? VersionDescription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
