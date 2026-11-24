using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role1>))]
public sealed record Role1 : OpenStringEnum<Role1>
{
    private Role1(string value) : base(value)
    {
    }

    public static readonly Role1 Admin = new("admin");

    public static readonly Role1 Contributor = new("contributor");

    public static readonly Role1 Member = new("member");

    public static readonly Role1 Owner = new("owner");

    public TResult Match<TResult>(Func<TResult> onAdmin,
        Func<TResult> onContributor,
        Func<TResult> onMember,
        Func<TResult> onOwner,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Admin => onAdmin(),
            _ when this == Contributor => onContributor(),
            _ when this == Member => onMember(),
            _ when this == Owner => onOwner(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdmin, Action onContributor, Action onMember, Action onOwner, Action<string> otherwise)
    {
        if (this == Admin) onAdmin();
        else if (this == Contributor) onContributor();
        else if (this == Member) onMember();
        else if (this == Owner) onOwner();
        else otherwise(Value);
    }
}
