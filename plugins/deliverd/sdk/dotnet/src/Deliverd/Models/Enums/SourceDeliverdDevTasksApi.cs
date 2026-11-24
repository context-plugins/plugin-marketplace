using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// The connected tool to read from (Organisation → Integrations &amp; webhooks): langfuse, langsmith, braintrust or weave
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceDeliverdDevTasksApi>))]
public sealed record SourceDeliverdDevTasksApi : OpenStringEnum<SourceDeliverdDevTasksApi>
{
    private SourceDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly SourceDeliverdDevTasksApi Langfuse = new("langfuse");

    public static readonly SourceDeliverdDevTasksApi Langsmith = new("langsmith");

    public static readonly SourceDeliverdDevTasksApi Braintrust = new("braintrust");

    public static readonly SourceDeliverdDevTasksApi Weave = new("weave");

    public TResult Match<TResult>(Func<TResult> onLangfuse,
        Func<TResult> onLangsmith,
        Func<TResult> onBraintrust,
        Func<TResult> onWeave,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Langfuse => onLangfuse(),
            _ when this == Langsmith => onLangsmith(),
            _ when this == Braintrust => onBraintrust(),
            _ when this == Weave => onWeave(),
            _ => otherwise(Value)
        };

    public void Match(Action onLangfuse,
        Action onLangsmith,
        Action onBraintrust,
        Action onWeave,
        Action<string> otherwise)
    {
        if (this == Langfuse) onLangfuse();
        else if (this == Langsmith) onLangsmith();
        else if (this == Braintrust) onBraintrust();
        else if (this == Weave) onWeave();
        else otherwise(Value);
    }
}
