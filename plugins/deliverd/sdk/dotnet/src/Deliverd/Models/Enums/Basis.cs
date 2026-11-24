using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Basis>))]
public sealed record Basis : OpenStringEnum<Basis>
{
    private Basis(string value) : base(value)
    {
    }

    public static readonly Basis Policy = new("policy");

    public static readonly Basis Human = new("human");

    public TResult Match<TResult>(Func<TResult> onPolicy, Func<TResult> onHuman, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Policy => onPolicy(),
            _ when this == Human => onHuman(),
            _ => otherwise(Value)
        };

    public void Match(Action onPolicy, Action onHuman, Action<string> otherwise)
    {
        if (this == Policy) onPolicy();
        else if (this == Human) onHuman();
        else otherwise(Value);
    }
}
