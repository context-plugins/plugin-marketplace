using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Spend \&amp; Expense User Role type information.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RoleType>))]
public sealed record RoleType : OpenStringEnum<RoleType>
{
    private RoleType(string value) : base(value)
    {
    }

    public static readonly RoleType Admin = new("ADMIN");

    public static readonly RoleType Approver = new("APPROVER");

    public static readonly RoleType Auditor = new("AUDITOR");

    public static readonly RoleType Bookkeeper = new("BOOKKEEPER");

    public static readonly RoleType Member = new("MEMBER");

    public static readonly RoleType FinanceAdmin = new("FINANCE_ADMIN");

    public static readonly RoleType NoAccess = new("NO_ACCESS");

    public TResult Match<TResult>(Func<TResult> onAdmin,
        Func<TResult> onApprover,
        Func<TResult> onAuditor,
        Func<TResult> onBookkeeper,
        Func<TResult> onMember,
        Func<TResult> onFinanceAdmin,
        Func<TResult> onNoAccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Admin => onAdmin(),
            _ when this == Approver => onApprover(),
            _ when this == Auditor => onAuditor(),
            _ when this == Bookkeeper => onBookkeeper(),
            _ when this == Member => onMember(),
            _ when this == FinanceAdmin => onFinanceAdmin(),
            _ when this == NoAccess => onNoAccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdmin,
        Action onApprover,
        Action onAuditor,
        Action onBookkeeper,
        Action onMember,
        Action onFinanceAdmin,
        Action onNoAccess,
        Action<string> otherwise)
    {
        if (this == Admin) onAdmin();
        else if (this == Approver) onApprover();
        else if (this == Auditor) onAuditor();
        else if (this == Bookkeeper) onBookkeeper();
        else if (this == Member) onMember();
        else if (this == FinanceAdmin) onFinanceAdmin();
        else if (this == NoAccess) onNoAccess();
        else otherwise(Value);
    }
}
