using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Phase>))]
public sealed record Phase : OpenStringEnum<Phase>
{
    private Phase(string value) : base(value)
    {
    }

    public static readonly Phase Commentary = new("commentary");

    public static readonly Phase FinalAnswer = new("final_answer");

    public TResult Match<TResult>(Func<TResult> onCommentary,
        Func<TResult> onFinalAnswer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Commentary => onCommentary(),
            _ when this == FinalAnswer => onFinalAnswer(),
            _ => otherwise(Value)
        };

    public void Match(Action onCommentary, Action onFinalAnswer, Action<string> otherwise)
    {
        if (this == Commentary) onCommentary();
        else if (this == FinalAnswer) onFinalAnswer();
        else otherwise(Value);
    }
}
