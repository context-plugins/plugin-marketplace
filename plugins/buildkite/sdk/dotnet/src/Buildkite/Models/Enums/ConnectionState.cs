using System;
using System.Text.Json.Serialization;
using Buildkite.Core.Enum;

namespace Buildkite.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ConnectionState>))]
public sealed record ConnectionState : OpenStringEnum<ConnectionState>
{
    private ConnectionState(string value) : base(value)
    {
    }

    public static readonly ConnectionState Connected = new("connected");

    public static readonly ConnectionState Disconnected = new("disconnected");

    public static readonly ConnectionState Stopped = new("stopped");

    public static readonly ConnectionState Stopping = new("stopping");

    public static readonly ConnectionState Lost = new("lost");

    public static readonly ConnectionState NeverConnected = new("never_connected");

    public TResult Match<TResult>(Func<TResult> onConnected,
        Func<TResult> onDisconnected,
        Func<TResult> onStopped,
        Func<TResult> onStopping,
        Func<TResult> onLost,
        Func<TResult> onNeverConnected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Connected => onConnected(),
            _ when this == Disconnected => onDisconnected(),
            _ when this == Stopped => onStopped(),
            _ when this == Stopping => onStopping(),
            _ when this == Lost => onLost(),
            _ when this == NeverConnected => onNeverConnected(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnected,
        Action onDisconnected,
        Action onStopped,
        Action onStopping,
        Action onLost,
        Action onNeverConnected,
        Action<string> otherwise)
    {
        if (this == Connected) onConnected();
        else if (this == Disconnected) onDisconnected();
        else if (this == Stopped) onStopped();
        else if (this == Stopping) onStopping();
        else if (this == Lost) onLost();
        else if (this == NeverConnected) onNeverConnected();
        else otherwise(Value);
    }
}
