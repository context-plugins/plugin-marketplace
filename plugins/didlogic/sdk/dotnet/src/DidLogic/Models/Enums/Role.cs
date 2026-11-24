using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Frontside = new("frontside");

    public static readonly Role Backside = new("backside");

    public TResult Match<TResult>(Func<TResult> onFrontside,
        Func<TResult> onBackside,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Frontside => onFrontside(),
            _ when this == Backside => onBackside(),
            _ => otherwise(Value)
        };

    public void Match(Action onFrontside, Action onBackside, Action<string> otherwise)
    {
        if (this == Frontside) onFrontside();
        else if (this == Backside) onBackside();
        else otherwise(Value);
    }
}
