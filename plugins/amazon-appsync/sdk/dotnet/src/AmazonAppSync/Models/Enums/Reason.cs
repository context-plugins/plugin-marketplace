using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason CodeError = new("CODE_ERROR");

    public TResult Match<TResult>(Func<TResult> onCodeError, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeError => onCodeError(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeError, Action<string> otherwise)
    {
        if (this == CodeError) onCodeError();
        else otherwise(Value);
    }
}
