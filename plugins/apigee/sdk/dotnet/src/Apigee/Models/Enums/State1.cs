using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Current state of the deployment. <b>Note</b>: This field is displayed only when viewing deployment status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 RuntimeStateUnspecified = new("RUNTIME_STATE_UNSPECIFIED");

    public static readonly State1 Ready = new("READY");

    public static readonly State1 Progressing = new("PROGRESSING");

    public static readonly State1 Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onRuntimeStateUnspecified,
        Func<TResult> onReady,
        Func<TResult> onProgressing,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RuntimeStateUnspecified => onRuntimeStateUnspecified(),
            _ when this == Ready => onReady(),
            _ when this == Progressing => onProgressing(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onRuntimeStateUnspecified,
        Action onReady,
        Action onProgressing,
        Action onError,
        Action<string> otherwise)
    {
        if (this == RuntimeStateUnspecified) onRuntimeStateUnspecified();
        else if (this == Ready) onReady();
        else if (this == Progressing) onProgressing();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
