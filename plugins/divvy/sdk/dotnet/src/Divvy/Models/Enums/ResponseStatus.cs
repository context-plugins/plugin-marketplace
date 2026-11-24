using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Status of the response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResponseStatus>))]
public sealed record ResponseStatus : OpenStringEnum<ResponseStatus>
{
    private ResponseStatus(string value) : base(value)
    {
    }

    public static readonly ResponseStatus Success = new("SUCCESS");

    public static readonly ResponseStatus Failure = new("FAILURE");

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
