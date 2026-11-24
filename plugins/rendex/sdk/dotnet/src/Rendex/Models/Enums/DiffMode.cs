using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DiffMode>))]
public sealed record DiffMode : OpenStringEnum<DiffMode>
{
    private DiffMode(string value) : base(value)
    {
    }

    public static readonly DiffMode Visual = new("visual");

    public static readonly DiffMode Text = new("text");

    public static readonly DiffMode Both = new("both");

    public TResult Match<TResult>(Func<TResult> onVisual,
        Func<TResult> onText,
        Func<TResult> onBoth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Visual => onVisual(),
            _ when this == Text => onText(),
            _ when this == Both => onBoth(),
            _ => otherwise(Value)
        };

    public void Match(Action onVisual, Action onText, Action onBoth, Action<string> otherwise)
    {
        if (this == Visual) onVisual();
        else if (this == Text) onText();
        else if (this == Both) onBoth();
        else otherwise(Value);
    }
}
