using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmDealsApi>))]
public sealed record ObjectRelmCrmDealsApi : OpenStringEnum<ObjectRelmCrmDealsApi>
{
    private ObjectRelmCrmDealsApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmDealsApi Deal = new("deal");

    public TResult Match<TResult>(Func<TResult> onDeal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Deal => onDeal(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeal, Action<string> otherwise)
    {
        if (this == Deal) onDeal();
        else otherwise(Value);
    }
}
