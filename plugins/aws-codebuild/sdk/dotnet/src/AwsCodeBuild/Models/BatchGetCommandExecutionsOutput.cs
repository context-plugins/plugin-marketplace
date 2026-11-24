using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetCommandExecutionsOutput
{
    /// <summary>
    /// Information about the requested command executions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commandExecutions")]
    public IReadOnlyList<CommandExecution>? CommandExecutions { get; init; }

    /// <summary>
    /// The IDs of command executions for which information could not be found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commandExecutionsNotFound")]
    public IReadOnlyList<string>? CommandExecutionsNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
