using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PollType>))]
public sealed record PollType : OpenStringEnum<PollType>
{
    private PollType(string value) : base(value)
    {
    }

    public static readonly PollType Voting = new("voting");

    public static readonly PollType Trivia = new("trivia");

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
