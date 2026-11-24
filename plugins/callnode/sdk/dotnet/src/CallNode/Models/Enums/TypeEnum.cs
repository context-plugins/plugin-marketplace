using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

/// <summary>
/// Always TXT: the DKIM key, the SPF entry and the DMARC policy, the three records verification checks. No MX or CNAME is issued (receiving and tracking are off).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Txt = new("TXT");

    public TResult Match<TResult>(Func<TResult> onTxt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Txt => onTxt(),
            _ => otherwise(Value)
        };

    public void Match(Action onTxt, Action<string> otherwise)
    {
        if (this == Txt) onTxt();
        else otherwise(Value);
    }
}
