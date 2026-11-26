using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Void status enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VoidStatus>))]
public sealed record VoidStatus : OpenStringEnum<VoidStatus>
{
    private VoidStatus(string value) : base(value)
    {
    }

    public static readonly VoidStatus ToBeProcessed = new("TO_BE_PROCESSED");

    public static readonly VoidStatus Accepted = new("ACCEPTED");

    public static readonly VoidStatus Rejected = new("REJECTED");

    public static readonly VoidStatus NoOp = new("NO_OP");

    public static readonly VoidStatus Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onToBeProcessed,
        Func<TResult> onAccepted,
        Func<TResult> onRejected,
        Func<TResult> onNoOp,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ToBeProcessed => onToBeProcessed(),
            _ when this == Accepted => onAccepted(),
            _ when this == Rejected => onRejected(),
            _ when this == NoOp => onNoOp(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onToBeProcessed,
        Action onAccepted,
        Action onRejected,
        Action onNoOp,
        Action onArchived,
        Action<string> otherwise)
    {
        if (this == ToBeProcessed) onToBeProcessed();
        else if (this == Accepted) onAccepted();
        else if (this == Rejected) onRejected();
        else if (this == NoOp) onNoOp();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
