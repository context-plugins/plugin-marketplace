using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModeEnum>))]
public sealed record ModeEnum : OpenStringEnum<ModeEnum>
{
    private ModeEnum(string value) : base(value)
    {
    }

    public static readonly ModeEnum Text = new("text");

    public static readonly ModeEnum Semantic = new("semantic");

    public static readonly ModeEnum Hybrid = new("hybrid");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onSemantic,
        Func<TResult> onHybrid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Semantic => onSemantic(),
            _ when this == Hybrid => onHybrid(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onSemantic, Action onHybrid, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Semantic) onSemantic();
        else if (this == Hybrid) onHybrid();
        else otherwise(Value);
    }
}
