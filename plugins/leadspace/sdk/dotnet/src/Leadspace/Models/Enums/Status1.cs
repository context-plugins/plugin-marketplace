using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Success = new("Success");

    public static readonly Status1 Failure = new("Failure");

    public TResult Match<TResult>(Func<TResult> onSuccess, Func<TResult> onFailure, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailure, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else otherwise(Value);
    }
}
