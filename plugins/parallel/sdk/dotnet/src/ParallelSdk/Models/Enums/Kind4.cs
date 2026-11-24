using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind4>))]
public sealed record Kind4 : OpenStringEnum<Kind4>
{
    private Kind4(string value) : base(value)
    {
    }

    public static readonly Kind4 Findall = new("findall");

    public TResult Match<TResult>(Func<TResult> onFindall, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Findall => onFindall(),
            _ => otherwise(Value)
        };

    public void Match(Action onFindall, Action<string> otherwise)
    {
        if (this == Findall) onFindall();
        else otherwise(Value);
    }
}
