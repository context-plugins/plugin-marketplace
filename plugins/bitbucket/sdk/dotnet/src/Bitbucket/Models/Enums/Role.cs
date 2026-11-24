using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Participant = new("PARTICIPANT");

    public static readonly Role Reviewer = new("REVIEWER");

    public TResult Match<TResult>(Func<TResult> onParticipant,
        Func<TResult> onReviewer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Participant => onParticipant(),
            _ when this == Reviewer => onReviewer(),
            _ => otherwise(Value)
        };

    public void Match(Action onParticipant, Action onReviewer, Action<string> otherwise)
    {
        if (this == Participant) onParticipant();
        else if (this == Reviewer) onReviewer();
        else otherwise(Value);
    }
}
