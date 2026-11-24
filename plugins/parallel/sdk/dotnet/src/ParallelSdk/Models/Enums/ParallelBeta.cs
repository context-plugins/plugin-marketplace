using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ParallelBeta>))]
public sealed record ParallelBeta : OpenStringEnum<ParallelBeta>
{
    private ParallelBeta(string value) : base(value)
    {
    }

    public static readonly ParallelBeta McpServer20250717 = new("mcp-server-2025-07-17");

    public static readonly ParallelBeta EventsSse20250724 = new("events-sse-2025-07-24");

    public static readonly ParallelBeta Webhook20250812 = new("webhook-2025-08-12");

    public static readonly ParallelBeta Findall20250915 = new("findall-2025-09-15");

    public static readonly ParallelBeta SearchExtract20251010 = new("search-extract-2025-10-10");

    public static readonly ParallelBeta FieldBasis20251125 = new("field-basis-2025-11-25");

    public TResult Match<TResult>(Func<TResult> onMcpServer20250717,
        Func<TResult> onEventsSse20250724,
        Func<TResult> onWebhook20250812,
        Func<TResult> onFindall20250915,
        Func<TResult> onSearchExtract20251010,
        Func<TResult> onFieldBasis20251125,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == McpServer20250717 => onMcpServer20250717(),
            _ when this == EventsSse20250724 => onEventsSse20250724(),
            _ when this == Webhook20250812 => onWebhook20250812(),
            _ when this == Findall20250915 => onFindall20250915(),
            _ when this == SearchExtract20251010 => onSearchExtract20251010(),
            _ when this == FieldBasis20251125 => onFieldBasis20251125(),
            _ => otherwise(Value)
        };

    public void Match(Action onMcpServer20250717,
        Action onEventsSse20250724,
        Action onWebhook20250812,
        Action onFindall20250915,
        Action onSearchExtract20251010,
        Action onFieldBasis20251125,
        Action<string> otherwise)
    {
        if (this == McpServer20250717) onMcpServer20250717();
        else if (this == EventsSse20250724) onEventsSse20250724();
        else if (this == Webhook20250812) onWebhook20250812();
        else if (this == Findall20250915) onFindall20250915();
        else if (this == SearchExtract20251010) onSearchExtract20251010();
        else if (this == FieldBasis20251125) onFieldBasis20251125();
        else otherwise(Value);
    }
}
