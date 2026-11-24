using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Persona>))]
public sealed record Persona : OpenStringEnum<Persona>
{
    private Persona(string value) : base(value)
    {
    }

    public static readonly Persona DecisionMaker = new("decision_maker");

    public static readonly Persona PotentialChampion = new("potential_champion");

    public static readonly Persona EndUser = new("end_user");

    public TResult Match<TResult>(Func<TResult> onDecisionMaker,
        Func<TResult> onPotentialChampion,
        Func<TResult> onEndUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DecisionMaker => onDecisionMaker(),
            _ when this == PotentialChampion => onPotentialChampion(),
            _ when this == EndUser => onEndUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onDecisionMaker, Action onPotentialChampion, Action onEndUser, Action<string> otherwise)
    {
        if (this == DecisionMaker) onDecisionMaker();
        else if (this == PotentialChampion) onPotentialChampion();
        else if (this == EndUser) onEndUser();
        else otherwise(Value);
    }
}
