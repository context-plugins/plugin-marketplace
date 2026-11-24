using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// Provides some indication of the status of this commit
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State3>))]
public sealed record State3 : OpenStringEnum<State3>
{
    private State3(string value) : base(value)
    {
    }

    public static readonly State3 Failed = new("FAILED");

    public static readonly State3 Inprogress = new("INPROGRESS");

    public static readonly State3 Stopped = new("STOPPED");

    public static readonly State3 Successful = new("SUCCESSFUL");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onInprogress,
        Func<TResult> onStopped,
        Func<TResult> onSuccessful,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Inprogress => onInprogress(),
            _ when this == Stopped => onStopped(),
            _ when this == Successful => onSuccessful(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed,
        Action onInprogress,
        Action onStopped,
        Action onSuccessful,
        Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Inprogress) onInprogress();
        else if (this == Stopped) onStopped();
        else if (this == Successful) onSuccessful();
        else otherwise(Value);
    }
}
