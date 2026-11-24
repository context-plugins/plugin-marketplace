using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BulkStatus>))]
public sealed record BulkStatus : OpenStringEnum<BulkStatus>
{
    private BulkStatus(string value) : base(value)
    {
    }

    public static readonly BulkStatus Completed = new("COMPLETED");

    public static readonly BulkStatus InsufficientCredits = new("INSUFFICIENT_CREDITS");

    public static readonly BulkStatus InternalError = new("INTERNAL_ERROR");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onInsufficientCredits,
        Func<TResult> onInternalError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ when this == InternalError => onInternalError(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onInsufficientCredits,
        Action onInternalError,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else if (this == InternalError) onInternalError();
        else otherwise(Value);
    }
}
