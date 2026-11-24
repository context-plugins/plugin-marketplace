using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The automated advertisement kind to fill at publish time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutomatedAdvertisementKind2>))]
public sealed record AutomatedAdvertisementKind2 : OpenStringEnum<AutomatedAdvertisementKind2>
{
    private AutomatedAdvertisementKind2(string value) : base(value)
    {
    }

    public static readonly AutomatedAdvertisementKind2 Primary = new("primary");

    public static readonly AutomatedAdvertisementKind2 Secondary = new("secondary");

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
