using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

/// <summary>
/// Defaults to member.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Owner = new("owner");

    public static readonly Role Admin = new("admin");

    public static readonly Role Member = new("member");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onAdmin,
        Func<TResult> onMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Admin => onAdmin(),
            _ when this == Member => onMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onAdmin, Action onMember, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Admin) onAdmin();
        else if (this == Member) onMember();
        else otherwise(Value);
    }
}
