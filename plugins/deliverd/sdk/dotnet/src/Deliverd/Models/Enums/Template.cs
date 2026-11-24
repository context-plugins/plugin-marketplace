using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Template>))]
public sealed record Template : OpenStringEnum<Template>
{
    private Template(string value) : base(value)
    {
    }

    public static readonly Template B0101 = new("B_01.01");

    public static readonly Template B0201 = new("B_02.01");

    public static readonly Template B0202 = new("B_02.02");

    public static readonly Template B0501 = new("B_05.01");

    public static readonly Template B0601 = new("B_06.01");

    public static readonly Template B0701 = new("B_07.01");

    public TResult Match<TResult>(Func<TResult> onB0101,
        Func<TResult> onB0201,
        Func<TResult> onB0202,
        Func<TResult> onB0501,
        Func<TResult> onB0601,
        Func<TResult> onB0701,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == B0101 => onB0101(),
            _ when this == B0201 => onB0201(),
            _ when this == B0202 => onB0202(),
            _ when this == B0501 => onB0501(),
            _ when this == B0601 => onB0601(),
            _ when this == B0701 => onB0701(),
            _ => otherwise(Value)
        };

    public void Match(Action onB0101,
        Action onB0201,
        Action onB0202,
        Action onB0501,
        Action onB0601,
        Action onB0701,
        Action<string> otherwise)
    {
        if (this == B0101) onB0101();
        else if (this == B0201) onB0201();
        else if (this == B0202) onB0202();
        else if (this == B0501) onB0501();
        else if (this == B0601) onB0601();
        else if (this == B0701) onB0701();
        else otherwise(Value);
    }
}
