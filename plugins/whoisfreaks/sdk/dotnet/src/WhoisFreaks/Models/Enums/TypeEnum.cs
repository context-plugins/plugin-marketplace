using System;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Enum;

namespace WhoisFreaks.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum A = new("a");

    public static readonly TypeEnum Mx = new("mx");

    public static readonly TypeEnum Cname = new("cname");

    public static readonly TypeEnum Ns = new("ns");

    public static readonly TypeEnum Aaaa = new("aaaa");

    public static readonly TypeEnum Txt = new("txt");

    public static readonly TypeEnum Soa = new("soa");

    public TResult Match<TResult>(Func<TResult> onA,
        Func<TResult> onMx,
        Func<TResult> onCname,
        Func<TResult> onNs,
        Func<TResult> onAaaa,
        Func<TResult> onTxt,
        Func<TResult> onSoa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == A => onA(),
            _ when this == Mx => onMx(),
            _ when this == Cname => onCname(),
            _ when this == Ns => onNs(),
            _ when this == Aaaa => onAaaa(),
            _ when this == Txt => onTxt(),
            _ when this == Soa => onSoa(),
            _ => otherwise(Value)
        };

    public void Match(Action onA,
        Action onMx,
        Action onCname,
        Action onNs,
        Action onAaaa,
        Action onTxt,
        Action onSoa,
        Action<string> otherwise)
    {
        if (this == A) onA();
        else if (this == Mx) onMx();
        else if (this == Cname) onCname();
        else if (this == Ns) onNs();
        else if (this == Aaaa) onAaaa();
        else if (this == Txt) onTxt();
        else if (this == Soa) onSoa();
        else otherwise(Value);
    }
}
