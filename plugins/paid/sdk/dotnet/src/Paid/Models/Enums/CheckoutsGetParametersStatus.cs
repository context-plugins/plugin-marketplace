using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CheckoutsGetParametersStatus>))]
public sealed record CheckoutsGetParametersStatus : OpenStringEnum<CheckoutsGetParametersStatus>
{
    private CheckoutsGetParametersStatus(string value) : base(value)
    {
    }

    public static readonly CheckoutsGetParametersStatus Active = new("active");

    public static readonly CheckoutsGetParametersStatus Completed = new("completed");

    public static readonly CheckoutsGetParametersStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onCompleted,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Completed => onCompleted(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onCompleted, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Completed) onCompleted();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
