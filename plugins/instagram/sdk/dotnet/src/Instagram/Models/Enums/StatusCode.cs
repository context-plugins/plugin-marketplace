using System;
using System.Text.Json.Serialization;
using Instagram.Core.Enum;

namespace Instagram.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCode>))]
public sealed record StatusCode : OpenStringEnum<StatusCode>
{
    private StatusCode(string value) : base(value)
    {
    }

    public static readonly StatusCode Expired = new("EXPIRED");

    public static readonly StatusCode Error = new("ERROR");

    public static readonly StatusCode Finished = new("FINISHED");

    public static readonly StatusCode InProgress = new("IN_PROGRESS");

    public static readonly StatusCode Published = new("PUBLISHED");

    public TResult Match<TResult>(Func<TResult> onExpired,
        Func<TResult> onError,
        Func<TResult> onFinished,
        Func<TResult> onInProgress,
        Func<TResult> onPublished,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Expired => onExpired(),
            _ when this == Error => onError(),
            _ when this == Finished => onFinished(),
            _ when this == InProgress => onInProgress(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onExpired,
        Action onError,
        Action onFinished,
        Action onInProgress,
        Action onPublished,
        Action<string> otherwise)
    {
        if (this == Expired) onExpired();
        else if (this == Error) onError();
        else if (this == Finished) onFinished();
        else if (this == InProgress) onInProgress();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
