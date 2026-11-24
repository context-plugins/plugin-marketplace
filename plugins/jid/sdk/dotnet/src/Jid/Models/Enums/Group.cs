using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Group>))]
public sealed record Group : OpenStringEnum<Group>
{
    private Group(string value) : base(value)
    {
    }

    public static readonly Group Identity = new("identity");

    public static readonly Group Legitimacy = new("legitimacy");

    public static readonly Group Safety = new("safety");

    public static readonly Group Location = new("location");

    public static readonly Group Capacity = new("capacity");

    public static readonly Group History = new("history");

    public TResult Match<TResult>(Func<TResult> onIdentity,
        Func<TResult> onLegitimacy,
        Func<TResult> onSafety,
        Func<TResult> onLocation,
        Func<TResult> onCapacity,
        Func<TResult> onHistory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Identity => onIdentity(),
            _ when this == Legitimacy => onLegitimacy(),
            _ when this == Safety => onSafety(),
            _ when this == Location => onLocation(),
            _ when this == Capacity => onCapacity(),
            _ when this == History => onHistory(),
            _ => otherwise(Value)
        };

    public void Match(Action onIdentity,
        Action onLegitimacy,
        Action onSafety,
        Action onLocation,
        Action onCapacity,
        Action onHistory,
        Action<string> otherwise)
    {
        if (this == Identity) onIdentity();
        else if (this == Legitimacy) onLegitimacy();
        else if (this == Safety) onSafety();
        else if (this == Location) onLocation();
        else if (this == Capacity) onCapacity();
        else if (this == History) onHistory();
        else otherwise(Value);
    }
}
