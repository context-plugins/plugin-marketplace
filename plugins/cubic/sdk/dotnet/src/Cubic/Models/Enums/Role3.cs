using System;
using System.Text.Json.Serialization;
using Cubic.Core.Enum;

namespace Cubic.Models.Enums;

/// <summary>
/// Desired role. Send with expectedRole.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role3>))]
public sealed record Role3 : OpenStringEnum<Role3>
{
    private Role3(string value) : base(value)
    {
    }

    public static readonly Role3 Member = new("member");

    public static readonly Role3 Admin = new("admin");

    public static readonly Role3 Viewer = new("viewer");

    public TResult Match<TResult>(Func<TResult> onMember,
        Func<TResult> onAdmin,
        Func<TResult> onViewer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Member => onMember(),
            _ when this == Admin => onAdmin(),
            _ when this == Viewer => onViewer(),
            _ => otherwise(Value)
        };

    public void Match(Action onMember, Action onAdmin, Action onViewer, Action<string> otherwise)
    {
        if (this == Member) onMember();
        else if (this == Admin) onAdmin();
        else if (this == Viewer) onViewer();
        else otherwise(Value);
    }
}
