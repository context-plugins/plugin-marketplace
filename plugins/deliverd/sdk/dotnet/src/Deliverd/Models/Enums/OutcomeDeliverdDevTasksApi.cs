using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OutcomeDeliverdDevTasksApi>))]
public sealed record OutcomeDeliverdDevTasksApi : OpenStringEnum<OutcomeDeliverdDevTasksApi>
{
    private OutcomeDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly OutcomeDeliverdDevTasksApi Applied = new("applied");

    public static readonly OutcomeDeliverdDevTasksApi Kept = new("kept");

    public static readonly OutcomeDeliverdDevTasksApi Discarded = new("discarded");

    public TResult Match<TResult>(Func<TResult> onApplied,
        Func<TResult> onKept,
        Func<TResult> onDiscarded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Applied => onApplied(),
            _ when this == Kept => onKept(),
            _ when this == Discarded => onDiscarded(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplied, Action onKept, Action onDiscarded, Action<string> otherwise)
    {
        if (this == Applied) onApplied();
        else if (this == Kept) onKept();
        else if (this == Discarded) onDiscarded();
        else otherwise(Value);
    }
}
