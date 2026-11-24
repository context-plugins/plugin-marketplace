using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusPerigonNewsStoriesApi>))]
public sealed record StatusPerigonNewsStoriesApi : OpenStringEnum<StatusPerigonNewsStoriesApi>
{
    private StatusPerigonNewsStoriesApi(string value) : base(value)
    {
    }

    public static readonly StatusPerigonNewsStoriesApi Pending = new("PENDING");

    public static readonly StatusPerigonNewsStoriesApi Completed = new("COMPLETED");

    public static readonly StatusPerigonNewsStoriesApi Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onCompleted,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onCompleted, Action onError, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
