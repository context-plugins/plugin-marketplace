using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source User = new("user");

    public static readonly Source Platform = new("platform");

    public static readonly Source Provider = new("provider");

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
