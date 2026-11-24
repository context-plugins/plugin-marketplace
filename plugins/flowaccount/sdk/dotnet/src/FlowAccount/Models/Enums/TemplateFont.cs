using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = ChatThai
/// 3 = Rsu
/// </summary>
[JsonConverter(typeof(IntEnumConverter<TemplateFont>))]
public sealed record TemplateFont : OpenIntEnum<TemplateFont>
{
    private TemplateFont(long value) : base(value)
    {
    }

    public static readonly TemplateFont Value1 = new(1L);

    public static readonly TemplateFont Value3 = new(3L);

    public TResult Match<TResult>(Func<TResult> onValue1, Func<TResult> onValue3, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action onValue3, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else otherwise(Value);
    }
}
