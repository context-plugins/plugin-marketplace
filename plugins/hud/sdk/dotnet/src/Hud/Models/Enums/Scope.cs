using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope Member = new("member");

    public static readonly Scope Team = new("team");

    public TResult Match<TResult>(Func<TResult> onMember, Func<TResult> onTeam, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Member => onMember(),
            _ when this == Team => onTeam(),
            _ => otherwise(Value)
        };

    public void Match(Action onMember, Action onTeam, Action<string> otherwise)
    {
        if (this == Member) onMember();
        else if (this == Team) onTeam();
        else otherwise(Value);
    }
}
