using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

/// <summary>
/// Key environment: live or sandbox (stay_test_).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Env>))]
public sealed record Env : OpenStringEnum<Env>
{
    private Env(string value) : base(value)
    {
    }

    public static readonly Env Live = new("live");

    public static readonly Env Sandbox = new("sandbox");

    public TResult Match<TResult>(Func<TResult> onLive, Func<TResult> onSandbox, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Live => onLive(),
            _ when this == Sandbox => onSandbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onLive, Action onSandbox, Action<string> otherwise)
    {
        if (this == Live) onLive();
        else if (this == Sandbox) onSandbox();
        else otherwise(Value);
    }
}
