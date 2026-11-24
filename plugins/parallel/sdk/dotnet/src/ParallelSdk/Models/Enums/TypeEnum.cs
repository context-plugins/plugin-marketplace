using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Function = new("function");

    public TResult Match<TResult>(Func<TResult> onFunction, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Function => onFunction(),
            _ => otherwise(Value)
        };

    public void Match(Action onFunction, Action<string> otherwise)
    {
        if (this == Function) onFunction();
        else otherwise(Value);
    }
}
