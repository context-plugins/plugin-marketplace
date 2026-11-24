using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record UpdateStateMachineAliasOutput
{
    /// <summary>
    /// The date and time the state machine alias was updated.
    /// </summary>
    [JsonPropertyName("updateDate")]
    public required DateTimeOffset UpdateDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
