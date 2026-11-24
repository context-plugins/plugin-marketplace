using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PollsExpandItems>))]
public sealed record PollsExpandItems : OpenStringEnum<PollsExpandItems>
{
    private PollsExpandItems(string value) : base(value)
    {
    }

    public static readonly PollsExpandItems Stats = new("stats");

    public static readonly PollsExpandItems PollResponses = new("poll_responses");

    public static readonly PollsExpandItems TriviaAnswer = new("trivia_answer");

    public TResult Match<TResult>(Func<TResult> onStats,
        Func<TResult> onPollResponses,
        Func<TResult> onTriviaAnswer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ when this == PollResponses => onPollResponses(),
            _ when this == TriviaAnswer => onTriviaAnswer(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats, Action onPollResponses, Action onTriviaAnswer, Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else if (this == PollResponses) onPollResponses();
        else if (this == TriviaAnswer) onTriviaAnswer();
        else otherwise(Value);
    }
}
