using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope3>))]
public sealed record Scope3 : OpenStringEnum<Scope3>
{
    private Scope3(string value) : base(value)
    {
    }

    public static readonly Scope3 All = new("all");

    public static readonly Scope3 Member = new("member");

    public static readonly Scope3 Team = new("team");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onMember,
        Func<TResult> onTeam,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Member => onMember(),
            _ when this == Team => onTeam(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onMember, Action onTeam, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Member) onMember();
        else if (this == Team) onTeam();
        else otherwise(Value);
    }
}
