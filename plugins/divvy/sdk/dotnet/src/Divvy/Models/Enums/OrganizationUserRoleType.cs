using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enumeration of organization user roles.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrganizationUserRoleType>))]
public sealed record OrganizationUserRoleType : OpenStringEnum<OrganizationUserRoleType>
{
    private OrganizationUserRoleType(string value) : base(value)
    {
    }

    public static readonly OrganizationUserRoleType Administrator = new("ADMINISTRATOR");

    public static readonly OrganizationUserRoleType Clerk = new("CLERK");

    public static readonly OrganizationUserRoleType Approver = new("APPROVER");

    public static readonly OrganizationUserRoleType Accountant = new("ACCOUNTANT");

    public static readonly OrganizationUserRoleType Custom = new("CUSTOM");

    public static readonly OrganizationUserRoleType Payer = new("PAYER");

    public static readonly OrganizationUserRoleType Partner = new("PARTNER");

    public static readonly OrganizationUserRoleType Auditor = new("AUDITOR");

    public static readonly OrganizationUserRoleType NoAccess = new("NO_ACCESS");

    public static readonly OrganizationUserRoleType Member = new("MEMBER");

    public static readonly OrganizationUserRoleType MemberPlus = new("MEMBER_PLUS");

    public static readonly OrganizationUserRoleType Internal = new("INTERNAL");

    public static readonly OrganizationUserRoleType PurchaseRequester = new("PURCHASE_REQUESTER");

    public static readonly OrganizationUserRoleType ConsoleCustom = new("CONSOLE_CUSTOM");

    public static readonly OrganizationUserRoleType Receiver = new("RECEIVER");

    public static readonly OrganizationUserRoleType ProcurementUser = new("PROCUREMENT_USER");

    public static readonly OrganizationUserRoleType Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onAdministrator,
        Func<TResult> onClerk,
        Func<TResult> onApprover,
        Func<TResult> onAccountant,
        Func<TResult> onCustom,
        Func<TResult> onPayer,
        Func<TResult> onPartner,
        Func<TResult> onAuditor,
        Func<TResult> onNoAccess,
        Func<TResult> onMember,
        Func<TResult> onMemberPlus,
        Func<TResult> onInternal,
        Func<TResult> onPurchaseRequester,
        Func<TResult> onConsoleCustom,
        Func<TResult> onReceiver,
        Func<TResult> onProcurementUser,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Administrator => onAdministrator(),
            _ when this == Clerk => onClerk(),
            _ when this == Approver => onApprover(),
            _ when this == Accountant => onAccountant(),
            _ when this == Custom => onCustom(),
            _ when this == Payer => onPayer(),
            _ when this == Partner => onPartner(),
            _ when this == Auditor => onAuditor(),
            _ when this == NoAccess => onNoAccess(),
            _ when this == Member => onMember(),
            _ when this == MemberPlus => onMemberPlus(),
            _ when this == Internal => onInternal(),
            _ when this == PurchaseRequester => onPurchaseRequester(),
            _ when this == ConsoleCustom => onConsoleCustom(),
            _ when this == Receiver => onReceiver(),
            _ when this == ProcurementUser => onProcurementUser(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdministrator,
        Action onClerk,
        Action onApprover,
        Action onAccountant,
        Action onCustom,
        Action onPayer,
        Action onPartner,
        Action onAuditor,
        Action onNoAccess,
        Action onMember,
        Action onMemberPlus,
        Action onInternal,
        Action onPurchaseRequester,
        Action onConsoleCustom,
        Action onReceiver,
        Action onProcurementUser,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Administrator) onAdministrator();
        else if (this == Clerk) onClerk();
        else if (this == Approver) onApprover();
        else if (this == Accountant) onAccountant();
        else if (this == Custom) onCustom();
        else if (this == Payer) onPayer();
        else if (this == Partner) onPartner();
        else if (this == Auditor) onAuditor();
        else if (this == NoAccess) onNoAccess();
        else if (this == Member) onMember();
        else if (this == MemberPlus) onMemberPlus();
        else if (this == Internal) onInternal();
        else if (this == PurchaseRequester) onPurchaseRequester();
        else if (this == ConsoleCustom) onConsoleCustom();
        else if (this == Receiver) onReceiver();
        else if (this == ProcurementUser) onProcurementUser();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
