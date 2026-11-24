using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<HasKey>))]
public sealed record HasKey : OpenStringEnum<HasKey>
{
    private HasKey(string value) : base(value)
    {
    }

    public static readonly HasKey No = new("No");

    public static readonly HasKey All = new("All");

    public static readonly HasKey With = new("With");

    public TResult Match<TResult>(Func<TResult> onNo,
        Func<TResult> onAll,
        Func<TResult> onWith,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == No => onNo(),
            _ when this == All => onAll(),
            _ when this == With => onWith(),
            _ => otherwise(Value)
        };

    public void Match(Action onNo, Action onAll, Action onWith, Action<string> otherwise)
    {
        if (this == No) onNo();
        else if (this == All) onAll();
        else if (this == With) onWith();
        else otherwise(Value);
    }
}
