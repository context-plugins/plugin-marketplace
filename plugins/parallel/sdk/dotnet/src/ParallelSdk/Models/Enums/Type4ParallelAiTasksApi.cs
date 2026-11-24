using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Type of MCP server being configured. Always <c>url</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4ParallelAiTasksApi>))]
public sealed record Type4ParallelAiTasksApi : OpenStringEnum<Type4ParallelAiTasksApi>
{
    private Type4ParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly Type4ParallelAiTasksApi Url = new("url");

    public TResult Match<TResult>(Func<TResult> onUrl, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Url => onUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onUrl, Action<string> otherwise)
    {
        if (this == Url) onUrl();
        else otherwise(Value);
    }
}
