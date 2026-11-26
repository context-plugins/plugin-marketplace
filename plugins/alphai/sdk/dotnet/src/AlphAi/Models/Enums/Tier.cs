using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Tier>))]
public sealed record Tier : OpenStringEnum<Tier>
{
    private Tier(string value) : base(value)
    {
    }

    public static readonly Tier Free = new("free");

    public static readonly Tier Basic = new("basic");

    public static readonly Tier Pro = new("pro");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onBasic,
        Func<TResult> onPro,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Basic => onBasic(),
            _ when this == Pro => onPro(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onBasic, Action onPro, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Basic) onBasic();
        else if (this == Pro) onPro();
        else otherwise(Value);
    }
}
