using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1PerigonNewsStoriesApi>))]
public sealed record Status1PerigonNewsStoriesApi : OpenStringEnum<Status1PerigonNewsStoriesApi>
{
    private Status1PerigonNewsStoriesApi(string value) : base(value)
    {
    }

    public static readonly Status1PerigonNewsStoriesApi Pending = new("PENDING");

    public static readonly Status1PerigonNewsStoriesApi Processing = new("PROCESSING");

    public static readonly Status1PerigonNewsStoriesApi Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onProcessing, Action onCompleted, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
