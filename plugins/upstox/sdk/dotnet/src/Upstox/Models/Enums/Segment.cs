using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Segment>))]
public sealed record Segment : OpenStringEnum<Segment>
{
    private Segment(string value) : base(value)
    {
    }

    public static readonly Segment BseEq = new("BSE_EQ");

    public static readonly Segment NseEq = new("NSE_EQ");

    public static readonly Segment NcdFo = new("NCD_FO");

    public static readonly Segment BcdFo = new("BCD_FO");

    public static readonly Segment NseFo = new("NSE_FO");

    public static readonly Segment BseFo = new("BSE_FO");

    public static readonly Segment BseMf = new("BSE_MF");

    public static readonly Segment McxFo = new("MCX_FO");

    public static readonly Segment NseCom = new("NSE_COM");

    public TResult Match<TResult>(Func<TResult> onBseEq,
        Func<TResult> onNseEq,
        Func<TResult> onNcdFo,
        Func<TResult> onBcdFo,
        Func<TResult> onNseFo,
        Func<TResult> onBseFo,
        Func<TResult> onBseMf,
        Func<TResult> onMcxFo,
        Func<TResult> onNseCom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BseEq => onBseEq(),
            _ when this == NseEq => onNseEq(),
            _ when this == NcdFo => onNcdFo(),
            _ when this == BcdFo => onBcdFo(),
            _ when this == NseFo => onNseFo(),
            _ when this == BseFo => onBseFo(),
            _ when this == BseMf => onBseMf(),
            _ when this == McxFo => onMcxFo(),
            _ when this == NseCom => onNseCom(),
            _ => otherwise(Value)
        };

    public void Match(Action onBseEq,
        Action onNseEq,
        Action onNcdFo,
        Action onBcdFo,
        Action onNseFo,
        Action onBseFo,
        Action onBseMf,
        Action onMcxFo,
        Action onNseCom,
        Action<string> otherwise)
    {
        if (this == BseEq) onBseEq();
        else if (this == NseEq) onNseEq();
        else if (this == NcdFo) onNcdFo();
        else if (this == BcdFo) onBcdFo();
        else if (this == NseFo) onNseFo();
        else if (this == BseFo) onBseFo();
        else if (this == BseMf) onBseMf();
        else if (this == McxFo) onMcxFo();
        else if (this == NseCom) onNseCom();
        else otherwise(Value);
    }
}
