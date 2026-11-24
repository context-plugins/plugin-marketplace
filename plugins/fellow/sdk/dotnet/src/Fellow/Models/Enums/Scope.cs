using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope AssignedToMe = new("assigned_to_me");

    public static readonly Scope AssignedToOthers = new("assigned_to_others");

    public static readonly Scope All = new("all");

    public TResult Match<TResult>(Func<TResult> onAssignedToMe,
        Func<TResult> onAssignedToOthers,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AssignedToMe => onAssignedToMe(),
            _ when this == AssignedToOthers => onAssignedToOthers(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssignedToMe, Action onAssignedToOthers, Action onAll, Action<string> otherwise)
    {
        if (this == AssignedToMe) onAssignedToMe();
        else if (this == AssignedToOthers) onAssignedToOthers();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
