using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = SwitchProductItemSellToBuy
/// </summary>
[JsonConverter(typeof(IntEnumConverter<CustomDocumentModel>))]
public sealed record CustomDocumentModel : OpenIntEnum<CustomDocumentModel>
{
    private CustomDocumentModel(long value) : base(value)
    {
    }

    public static readonly CustomDocumentModel Value1 = new(1L);

    public TResult Match<TResult>(Func<TResult> onValue1, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else otherwise(Value);
    }
}
