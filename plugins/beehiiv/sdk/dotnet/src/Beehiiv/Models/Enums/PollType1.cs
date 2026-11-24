using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of poll.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PollType1>))]
public sealed record PollType1 : OpenStringEnum<PollType1>
{
    private PollType1(string value) : base(value)
    {
    }

    public static readonly PollType1 Voting = new("voting");

    public static readonly PollType1 Trivia = new("trivia");

    public TResult Match<TResult>(Func<TResult> onVoting, Func<TResult> onTrivia, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Voting => onVoting(),
            _ when this == Trivia => onTrivia(),
            _ => otherwise(Value)
        };

    public void Match(Action onVoting, Action onTrivia, Action<string> otherwise)
    {
        if (this == Voting) onVoting();
        else if (this == Trivia) onTrivia();
        else otherwise(Value);
    }
}
