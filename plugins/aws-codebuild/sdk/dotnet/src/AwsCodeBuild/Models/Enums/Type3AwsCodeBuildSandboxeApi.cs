using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of environment variable. Valid values include: PARAMETER_STORE: An environment variable stored in Systems Manager Parameter Store. For environment variables of this type, specify the name of the parameter as the value of the EnvironmentVariable. The parameter value will be substituted for the name at runtime. You can also define Parameter Store environment variables in the buildspec. To learn how to do so, see env/parameter-store in the CodeBuild User Guide. PLAINTEXT: An environment variable in plain text format. This is the default value. SECRETS_MANAGER: An environment variable sto
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3AwsCodeBuildSandboxeApi>))]
public sealed record Type3AwsCodeBuildSandboxeApi : OpenStringEnum<Type3AwsCodeBuildSandboxeApi>
{
    private Type3AwsCodeBuildSandboxeApi(string value) : base(value)
    {
    }

    public static readonly Type3AwsCodeBuildSandboxeApi Plaintext = new("PLAINTEXT");

    public static readonly Type3AwsCodeBuildSandboxeApi ParameterStore = new("PARAMETER_STORE");

    public static readonly Type3AwsCodeBuildSandboxeApi SecretsManager = new("SECRETS_MANAGER");

    public TResult Match<TResult>(Func<TResult> onPlaintext,
        Func<TResult> onParameterStore,
        Func<TResult> onSecretsManager,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Plaintext => onPlaintext(),
            _ when this == ParameterStore => onParameterStore(),
            _ when this == SecretsManager => onSecretsManager(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlaintext, Action onParameterStore, Action onSecretsManager, Action<string> otherwise)
    {
        if (this == Plaintext) onPlaintext();
        else if (this == ParameterStore) onParameterStore();
        else if (this == SecretsManager) onSecretsManager();
        else otherwise(Value);
    }
}
