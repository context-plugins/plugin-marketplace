using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The type of schema being defined. Always <c>text</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeParallelAiTasksApi>))]
public sealed record TypeParallelAiTasksApi : OpenStringEnum<TypeParallelAiTasksApi>
{
    private TypeParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly TypeParallelAiTasksApi Text = new("text");

    public TResult Match<TResult>(Func<TResult> onText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action<string> otherwise)
    {
        if (this == Text) onText();
        else otherwise(Value);
    }
}
