using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Success = new("success");

    public static readonly Status Error = new("error");

    public static readonly Status PartialSuccess = new("partial_success");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onError,
        Func<TResult> onPartialSuccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Error => onError(),
            _ when this == PartialSuccess => onPartialSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onError, Action onPartialSuccess, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Error) onError();
        else if (this == PartialSuccess) onPartialSuccess();
        else otherwise(Value);
    }
}
