using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The type of schema being defined. Always <c>auto</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3ParallelAiTasksApi>))]
public sealed record Type3ParallelAiTasksApi : OpenStringEnum<Type3ParallelAiTasksApi>
{
    private Type3ParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly Type3ParallelAiTasksApi Auto = new("auto");

    public TResult Match<TResult>(Func<TResult> onAuto, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else otherwise(Value);
    }
}
