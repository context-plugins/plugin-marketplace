using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectEnum>))]
public sealed record ObjectEnum : OpenStringEnum<ObjectEnum>
{
    private ObjectEnum(string value) : base(value)
    {
    }

    public static readonly ObjectEnum Activity = new("activity");

    public TResult Match<TResult>(Func<TResult> onActivity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Activity => onActivity(),
            _ => otherwise(Value)
        };

    public void Match(Action onActivity, Action<string> otherwise)
    {
        if (this == Activity) onActivity();
        else otherwise(Value);
    }
}
