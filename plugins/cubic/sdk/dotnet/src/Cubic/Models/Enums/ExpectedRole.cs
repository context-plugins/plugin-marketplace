using System;
using System.Text.Json.Serialization;
using Cubic.Core.Enum;

namespace Cubic.Models.Enums;

/// <summary>
/// Current role from your latest read; send only with role.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExpectedRole>))]
public sealed record ExpectedRole : OpenStringEnum<ExpectedRole>
{
    private ExpectedRole(string value) : base(value)
    {
    }

    public static readonly ExpectedRole Member = new("member");

    public static readonly ExpectedRole Admin = new("admin");

    public static readonly ExpectedRole Viewer = new("viewer");

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
