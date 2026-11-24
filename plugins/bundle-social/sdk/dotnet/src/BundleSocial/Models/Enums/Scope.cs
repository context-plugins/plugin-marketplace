using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope People = new("people");

    public static readonly Scope Organizations = new("organizations");

    public static readonly Scope All = new("all");

    public TResult Match<TResult>(Func<TResult> onPeople,
        Func<TResult> onOrganizations,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == People => onPeople(),
            _ when this == Organizations => onOrganizations(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onPeople, Action onOrganizations, Action onAll, Action<string> otherwise)
    {
        if (this == People) onPeople();
        else if (this == Organizations) onOrganizations();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
