using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State7ApigeeProjectsApi>))]
public sealed record State7ApigeeProjectsApi : OpenStringEnum<State7ApigeeProjectsApi>
{
    private State7ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State7ApigeeProjectsApi StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State7ApigeeProjectsApi Creating = new("CREATING");

    public static readonly State7ApigeeProjectsApi Active = new("ACTIVE");

    public static readonly State7ApigeeProjectsApi ApplyingConfig = new("APPLYING_CONFIG");

    public static readonly State7ApigeeProjectsApi Error = new("ERROR");

    public static readonly State7ApigeeProjectsApi Failed = new("FAILED");

    public static readonly State7ApigeeProjectsApi Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onApplyingConfig,
        Func<TResult> onError,
        Func<TResult> onFailed,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == ApplyingConfig => onApplyingConfig(),
            _ when this == Error => onError(),
            _ when this == Failed => onFailed(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onActive,
        Action onApplyingConfig,
        Action onError,
        Action onFailed,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == ApplyingConfig) onApplyingConfig();
        else if (this == Error) onError();
        else if (this == Failed) onFailed();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
