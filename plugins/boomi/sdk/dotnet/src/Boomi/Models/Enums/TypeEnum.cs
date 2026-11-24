using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Atom type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Atom = new("ATOM");

    public static readonly TypeEnum Molecule = new("MOLECULE");

    public static readonly TypeEnum Cloud = new("CLOUD");

    public TResult Match<TResult>(Func<TResult> onAtom,
        Func<TResult> onMolecule,
        Func<TResult> onCloud,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Atom => onAtom(),
            _ when this == Molecule => onMolecule(),
            _ when this == Cloud => onCloud(),
            _ => otherwise(Value)
        };

    public void Match(Action onAtom, Action onMolecule, Action onCloud, Action<string> otherwise)
    {
        if (this == Atom) onAtom();
        else if (this == Molecule) onMolecule();
        else if (this == Cloud) onCloud();
        else otherwise(Value);
    }
}
