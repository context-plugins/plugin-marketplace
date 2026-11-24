using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Spend \&amp; Expense User role type for creating and updating a user's role.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputRoleType>))]
public sealed record InputRoleType : OpenStringEnum<InputRoleType>
{
    private InputRoleType(string value) : base(value)
    {
    }

    public static readonly InputRoleType Admin = new("ADMIN");

    public static readonly InputRoleType Auditor = new("AUDITOR");

    public static readonly InputRoleType Bookkeeper = new("BOOKKEEPER");

    public static readonly InputRoleType Member = new("MEMBER");

    public TResult Match<TResult>(Func<TResult> onAdmin,
        Func<TResult> onAuditor,
        Func<TResult> onBookkeeper,
        Func<TResult> onMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Admin => onAdmin(),
            _ when this == Auditor => onAuditor(),
            _ when this == Bookkeeper => onBookkeeper(),
            _ when this == Member => onMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdmin, Action onAuditor, Action onBookkeeper, Action onMember, Action<string> otherwise)
    {
        if (this == Admin) onAdmin();
        else if (this == Auditor) onAuditor();
        else if (this == Bookkeeper) onBookkeeper();
        else if (this == Member) onMember();
        else otherwise(Value);
    }
}
