using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GenderEnum>))]
public sealed record GenderEnum : OpenStringEnum<GenderEnum>
{
    private GenderEnum(string value) : base(value)
    {
    }

    public static readonly GenderEnum Male = new("male");

    public static readonly GenderEnum Female = new("female");

    public static readonly GenderEnum Other = new("other");

    public TResult Match<TResult>(Func<TResult> onMale,
        Func<TResult> onFemale,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Male => onMale(),
            _ when this == Female => onFemale(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onMale, Action onFemale, Action onOther, Action<string> otherwise)
    {
        if (this == Male) onMale();
        else if (this == Female) onFemale();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
