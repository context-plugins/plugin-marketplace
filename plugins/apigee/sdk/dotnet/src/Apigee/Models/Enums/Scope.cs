using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope ScopeUnspecified = new("SCOPE_UNSPECIFIED");

    public static readonly Scope Api = new("API");

    public static readonly Scope Version = new("VERSION");

    public static readonly Scope Spec = new("SPEC");

    public static readonly Scope ApiOperation = new("API_OPERATION");

    public static readonly Scope Deployment = new("DEPLOYMENT");

    public static readonly Scope Dependency = new("DEPENDENCY");

    public static readonly Scope Definition = new("DEFINITION");

    public static readonly Scope ExternalApi = new("EXTERNAL_API");

    public static readonly Scope Plugin = new("PLUGIN");

    public TResult Match<TResult>(Func<TResult> onScopeUnspecified,
        Func<TResult> onApi,
        Func<TResult> onVersion,
        Func<TResult> onSpec,
        Func<TResult> onApiOperation,
        Func<TResult> onDeployment,
        Func<TResult> onDependency,
        Func<TResult> onDefinition,
        Func<TResult> onExternalApi,
        Func<TResult> onPlugin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ScopeUnspecified => onScopeUnspecified(),
            _ when this == Api => onApi(),
            _ when this == Version => onVersion(),
            _ when this == Spec => onSpec(),
            _ when this == ApiOperation => onApiOperation(),
            _ when this == Deployment => onDeployment(),
            _ when this == Dependency => onDependency(),
            _ when this == Definition => onDefinition(),
            _ when this == ExternalApi => onExternalApi(),
            _ when this == Plugin => onPlugin(),
            _ => otherwise(Value)
        };

    public void Match(Action onScopeUnspecified,
        Action onApi,
        Action onVersion,
        Action onSpec,
        Action onApiOperation,
        Action onDeployment,
        Action onDependency,
        Action onDefinition,
        Action onExternalApi,
        Action onPlugin,
        Action<string> otherwise)
    {
        if (this == ScopeUnspecified) onScopeUnspecified();
        else if (this == Api) onApi();
        else if (this == Version) onVersion();
        else if (this == Spec) onSpec();
        else if (this == ApiOperation) onApiOperation();
        else if (this == Deployment) onDeployment();
        else if (this == Dependency) onDependency();
        else if (this == Definition) onDefinition();
        else if (this == ExternalApi) onExternalApi();
        else if (this == Plugin) onPlugin();
        else otherwise(Value);
    }
}
