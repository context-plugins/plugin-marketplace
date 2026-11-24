using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The role of the authenticated user in the project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Owner = new("owner");

    public static readonly Role Member = new("member");

    public TResult Match<TResult>(Func<TResult> onOwner, Func<TResult> onMember, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Member => onMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onMember, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Member) onMember();
        else otherwise(Value);
    }
}
