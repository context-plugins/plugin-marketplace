using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OwnershipType>))]
public sealed record OwnershipType : OpenStringEnum<OwnershipType>
{
    private OwnershipType(string value) : base(value)
    {
    }

    public static readonly OwnershipType OwnershipTypeUnspecified = new("OWNERSHIP_TYPE_UNSPECIFIED");

    public static readonly OwnershipType SystemOwned = new("SYSTEM_OWNED");

    public static readonly OwnershipType UserOwned = new("USER_OWNED");

    public TResult Match<TResult>(Func<TResult> onOwnershipTypeUnspecified,
        Func<TResult> onSystemOwned,
        Func<TResult> onUserOwned,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OwnershipTypeUnspecified => onOwnershipTypeUnspecified(),
            _ when this == SystemOwned => onSystemOwned(),
            _ when this == UserOwned => onUserOwned(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwnershipTypeUnspecified,
        Action onSystemOwned,
        Action onUserOwned,
        Action<string> otherwise)
    {
        if (this == OwnershipTypeUnspecified) onOwnershipTypeUnspecified();
        else if (this == SystemOwned) onSystemOwned();
        else if (this == UserOwned) onUserOwned();
        else otherwise(Value);
    }
}
