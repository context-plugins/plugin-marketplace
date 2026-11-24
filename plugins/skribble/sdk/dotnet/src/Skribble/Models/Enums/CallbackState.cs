using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// The state of the callback.
/// <para>
/// Possible values:
///   - <b>OPEN</b> The callback request will be executed in the next execution cycle.
///   - <b>COMPLETED</b> The callback request was executed successfully. The API received an HTTP 2xx success code in response.
///   - <b>RESIGNATED</b> The callback request has been attempted <c>attempts</c> times but was unsuccessful. The API did not receive a valid HTTP 2xx response.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CallbackState>))]
public sealed record CallbackState : OpenStringEnum<CallbackState>
{
    private CallbackState(string value) : base(value)
    {
    }

    public static readonly CallbackState Open = new("OPEN");

    public static readonly CallbackState Completed = new("COMPLETED");

    public static readonly CallbackState Resignated = new("RESIGNATED");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onCompleted,
        Func<TResult> onResignated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Completed => onCompleted(),
            _ when this == Resignated => onResignated(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onCompleted, Action onResignated, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Completed) onCompleted();
        else if (this == Resignated) onResignated();
        else otherwise(Value);
    }
}
