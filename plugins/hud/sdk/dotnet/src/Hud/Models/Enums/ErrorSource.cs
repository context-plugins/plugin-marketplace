using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Who is at fault for a failure.
/// <para>
/// ``user``: the customer's input, account, environment, or agent code.
/// ``platform``: HUD infrastructure or a broken platform invariant.
/// ``provider``: a third-party dependency (cloud runtime, upstream LLM API).
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorSource>))]
public sealed record ErrorSource : OpenStringEnum<ErrorSource>
{
    private ErrorSource(string value) : base(value)
    {
    }

    public static readonly ErrorSource User = new("user");

    public static readonly ErrorSource Platform = new("platform");

    public static readonly ErrorSource Provider = new("provider");

    public TResult Match<TResult>(Func<TResult> onUser,
        Func<TResult> onPlatform,
        Func<TResult> onProvider,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Platform => onPlatform(),
            _ when this == Provider => onProvider(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onPlatform, Action onProvider, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Platform) onPlatform();
        else if (this == Provider) onProvider();
        else otherwise(Value);
    }
}
