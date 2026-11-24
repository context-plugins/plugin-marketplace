using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevKnowledgeApi>))]
public sealed record StatusDeliverdDevKnowledgeApi : OpenStringEnum<StatusDeliverdDevKnowledgeApi>
{
    private StatusDeliverdDevKnowledgeApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevKnowledgeApi Confirmed = new("confirmed");

    public static readonly StatusDeliverdDevKnowledgeApi Proposed = new("proposed");

    public static readonly StatusDeliverdDevKnowledgeApi Rejected = new("rejected");

    public static readonly StatusDeliverdDevKnowledgeApi Retired = new("retired");

    public static readonly StatusDeliverdDevKnowledgeApi Superseded = new("superseded");

    public static readonly StatusDeliverdDevKnowledgeApi Open = new("open");

    public static readonly StatusDeliverdDevKnowledgeApi All = new("all");

    public TResult Match<TResult>(Func<TResult> onConfirmed,
        Func<TResult> onProposed,
        Func<TResult> onRejected,
        Func<TResult> onRetired,
        Func<TResult> onSuperseded,
        Func<TResult> onOpen,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Confirmed => onConfirmed(),
            _ when this == Proposed => onProposed(),
            _ when this == Rejected => onRejected(),
            _ when this == Retired => onRetired(),
            _ when this == Superseded => onSuperseded(),
            _ when this == Open => onOpen(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onConfirmed,
        Action onProposed,
        Action onRejected,
        Action onRetired,
        Action onSuperseded,
        Action onOpen,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == Confirmed) onConfirmed();
        else if (this == Proposed) onProposed();
        else if (this == Rejected) onRejected();
        else if (this == Retired) onRetired();
        else if (this == Superseded) onSuperseded();
        else if (this == Open) onOpen();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
