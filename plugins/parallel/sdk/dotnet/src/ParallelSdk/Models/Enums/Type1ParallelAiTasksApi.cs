using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The type of schema being defined. Always <c>json</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1ParallelAiTasksApi>))]
public sealed record Type1ParallelAiTasksApi : OpenStringEnum<Type1ParallelAiTasksApi>
{
    private Type1ParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly Type1ParallelAiTasksApi Json = new("json");

    public TResult Match<TResult>(Func<TResult> onJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else otherwise(Value);
    }
}
