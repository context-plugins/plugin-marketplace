using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// The tool that wrote it: deliverd, promptfoo, inspect, garak, weave, braintrust, junit
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FormatDeliverdDevTasksApi>))]
public sealed record FormatDeliverdDevTasksApi : OpenStringEnum<FormatDeliverdDevTasksApi>
{
    private FormatDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly FormatDeliverdDevTasksApi Deliverd = new("deliverd");

    public static readonly FormatDeliverdDevTasksApi Promptfoo = new("promptfoo");

    public static readonly FormatDeliverdDevTasksApi Inspect = new("inspect");

    public static readonly FormatDeliverdDevTasksApi Garak = new("garak");

    public static readonly FormatDeliverdDevTasksApi Weave = new("weave");

    public static readonly FormatDeliverdDevTasksApi Braintrust = new("braintrust");

    public static readonly FormatDeliverdDevTasksApi Junit = new("junit");

    public TResult Match<TResult>(Func<TResult> onDeliverd,
        Func<TResult> onPromptfoo,
        Func<TResult> onInspect,
        Func<TResult> onGarak,
        Func<TResult> onWeave,
        Func<TResult> onBraintrust,
        Func<TResult> onJunit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Deliverd => onDeliverd(),
            _ when this == Promptfoo => onPromptfoo(),
            _ when this == Inspect => onInspect(),
            _ when this == Garak => onGarak(),
            _ when this == Weave => onWeave(),
            _ when this == Braintrust => onBraintrust(),
            _ when this == Junit => onJunit(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeliverd,
        Action onPromptfoo,
        Action onInspect,
        Action onGarak,
        Action onWeave,
        Action onBraintrust,
        Action onJunit,
        Action<string> otherwise)
    {
        if (this == Deliverd) onDeliverd();
        else if (this == Promptfoo) onPromptfoo();
        else if (this == Inspect) onInspect();
        else if (this == Garak) onGarak();
        else if (this == Weave) onWeave();
        else if (this == Braintrust) onBraintrust();
        else if (this == Junit) onJunit();
        else otherwise(Value);
    }
}
