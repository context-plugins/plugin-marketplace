using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Admin = new("admin");

    public static readonly Role Member = new("member");

    public static readonly Role External = new("external");

    public TResult Match<TResult>(Func<TResult> onAdmin,
        Func<TResult> onMember,
        Func<TResult> onExternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Admin => onAdmin(),
            _ when this == Member => onMember(),
            _ when this == External => onExternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdmin, Action onMember, Action onExternal, Action<string> otherwise)
    {
        if (this == Admin) onAdmin();
        else if (this == Member) onMember();
        else if (this == External) onExternal();
        else otherwise(Value);
    }
}
