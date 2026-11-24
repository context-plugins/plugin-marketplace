using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Success = new("success");

    public static readonly Status Failure = new("failure");

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
