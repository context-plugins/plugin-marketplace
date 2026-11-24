using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The current state of the export.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Pending = new("pending");

    public static readonly State Started = new("started");

    public static readonly State Finished = new("finished");

    public static readonly State Error = new("error");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onStarted,
        Func<TResult> onFinished,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Started => onStarted(),
            _ when this == Finished => onFinished(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onStarted, Action onFinished, Action onError, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Started) onStarted();
        else if (this == Finished) onFinished();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
