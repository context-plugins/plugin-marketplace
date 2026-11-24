using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The size of the button (e.g., small, normal, large).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sizes1>))]
public sealed record Sizes1 : OpenStringEnum<Sizes1>
{
    private Sizes1(string value) : base(value)
    {
    }

    public static readonly Sizes1 Small = new("small");

    public static readonly Sizes1 Normal = new("normal");

    public static readonly Sizes1 Large = new("large");

    public TResult Match<TResult>(Func<TResult> onSmall,
        Func<TResult> onNormal,
        Func<TResult> onLarge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Small => onSmall(),
            _ when this == Normal => onNormal(),
            _ when this == Large => onLarge(),
            _ => otherwise(Value)
        };

    public void Match(Action onSmall, Action onNormal, Action onLarge, Action<string> otherwise)
    {
        if (this == Small) onSmall();
        else if (this == Normal) onNormal();
        else if (this == Large) onLarge();
        else otherwise(Value);
    }
}
