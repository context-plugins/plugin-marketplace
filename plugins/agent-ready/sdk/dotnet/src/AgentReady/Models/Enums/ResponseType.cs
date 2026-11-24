using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResponseType>))]
public sealed record ResponseType : OpenStringEnum<ResponseType>
{
    private ResponseType(string value) : base(value)
    {
    }

    public static readonly ResponseType Answer = new("answer");

    public static readonly ResponseType Failure = new("failure");

    public static readonly ResponseType Elicitation = new("elicitation");

    public static readonly ResponseType Promise = new("promise");

    public TResult Match<TResult>(Func<TResult> onAnswer,
        Func<TResult> onFailure,
        Func<TResult> onElicitation,
        Func<TResult> onPromise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Answer => onAnswer(),
            _ when this == Failure => onFailure(),
            _ when this == Elicitation => onElicitation(),
            _ when this == Promise => onPromise(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnswer,
        Action onFailure,
        Action onElicitation,
        Action onPromise,
        Action<string> otherwise)
    {
        if (this == Answer) onAnswer();
        else if (this == Failure) onFailure();
        else if (this == Elicitation) onElicitation();
        else if (this == Promise) onPromise();
        else otherwise(Value);
    }
}
