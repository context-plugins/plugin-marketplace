using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AutomatedAdvertisementKind>))]
public sealed record AutomatedAdvertisementKind : OpenStringEnum<AutomatedAdvertisementKind>
{
    private AutomatedAdvertisementKind(string value) : base(value)
    {
    }

    public static readonly AutomatedAdvertisementKind Primary = new("primary");

    public static readonly AutomatedAdvertisementKind Secondary = new("secondary");

    public TResult Match<TResult>(Func<TResult> onPrimary,
        Func<TResult> onSecondary,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Primary => onPrimary(),
            _ when this == Secondary => onSecondary(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrimary, Action onSecondary, Action<string> otherwise)
    {
        if (this == Primary) onPrimary();
        else if (this == Secondary) onSecondary();
        else otherwise(Value);
    }
}
