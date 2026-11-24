using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record EnvironmentVariableAwsCodeBuildSandboxeApi
{
    /// <summary>
    /// The name or key of the environment variable.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The value of the environment variable. We strongly discourage the use of PLAINTEXT environment variables to store sensitive values, especially Amazon Web Services secret key IDs. PLAINTEXT environment variables can be displayed in plain text using the CodeBuild console and the CLI. For sensitive values, we recommend you use an environment variable of type PARAMETER_STORE or SECRETS_MANAGER.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    /// <summary>
    /// The type of environment variable. Valid values include: PARAMETER_STORE: An environment variable stored in Systems Manager Parameter Store. For environment variables of this type, specify the name of the parameter as the value of the EnvironmentVariable. The parameter value will be substituted for the name at runtime. You can also define Parameter Store environment variables in the buildspec. To learn how to do so, see env/parameter-store in the CodeBuild User Guide. PLAINTEXT: An environment variable in plain text format. This is the default value. SECRETS_MANAGER: An environment variable sto
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type3AwsCodeBuildSandboxeApi? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
