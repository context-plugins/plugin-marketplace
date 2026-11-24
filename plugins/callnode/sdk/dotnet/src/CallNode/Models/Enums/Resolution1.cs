using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Resolution1>))]
public sealed record Resolution1 : OpenStringEnum<Resolution1>
{
    private Resolution1(string value) : base(value)
    {
    }

    public static readonly Resolution1 Fine = new("fine");

    public static readonly Resolution1 Standard = new("standard");

    public TResult Match<TResult>(Func<TResult> onFine, Func<TResult> onStandard, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fine => onFine(),
            _ when this == Standard => onStandard(),
            _ => otherwise(Value)
        };

    public void Match(Action onFine, Action onStandard, Action<string> otherwise)
    {
        if (this == Fine) onFine();
        else if (this == Standard) onStandard();
        else otherwise(Value);
    }
}
