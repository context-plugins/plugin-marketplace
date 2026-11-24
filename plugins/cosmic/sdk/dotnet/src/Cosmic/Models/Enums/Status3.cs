using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Enum;

namespace Cosmic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Success = new("success");

    public static readonly Status3 Error = new("error");

    public TResult Match<TResult>(Func<TResult> onSuccess, Func<TResult> onError, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onError, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
