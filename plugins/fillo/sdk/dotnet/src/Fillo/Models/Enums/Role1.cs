using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role1>))]
public sealed record Role1 : OpenStringEnum<Role1>
{
    private Role1(string value) : base(value)
    {
    }

    public static readonly Role1 Owner = new("owner");

    public static readonly Role1 Admin = new("admin");

    public static readonly Role1 Member = new("member");

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
