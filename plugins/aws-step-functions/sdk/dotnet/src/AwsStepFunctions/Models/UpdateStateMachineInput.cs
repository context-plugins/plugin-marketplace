using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record UpdateStateMachineInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The Amazon States Language definition of the state machine. See Amazon States Language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definition")]
    public string? Definition { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role of the state machine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfiguration")]
    public LoggingConfiguration? LoggingConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tracingConfiguration")]
    public TracingConfiguration? TracingConfiguration { get; init; }

    /// <summary>
    /// Specifies whether the state machine version is published. The default is false. To publish a version after updating the state machine, set publish to true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish")]
    public bool? Publish { get; init; }

    /// <summary>
    /// An optional description of the state machine version to publish. You can only specify the versionDescription parameter if you've set publish to true.
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
