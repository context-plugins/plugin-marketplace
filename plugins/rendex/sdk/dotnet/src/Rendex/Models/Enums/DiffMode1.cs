using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// How changes are detected. Default <c>both</c> = a pixel diff (with a highlighted overlay) AND a full-page text diff, alerting on either — catches any change, visual or text. <c>visual</c> or <c>text</c> narrow to a single signal. (<c>text</c>/<c>both</c> extract the full visible page text, not just the article body.)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DiffMode1>))]
public sealed record DiffMode1 : OpenStringEnum<DiffMode1>
{
    private DiffMode1(string value) : base(value)
    {
    }

    public static readonly DiffMode1 Visual = new("visual");

    public static readonly DiffMode1 Text = new("text");

    public static readonly DiffMode1 Both = new("both");

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
