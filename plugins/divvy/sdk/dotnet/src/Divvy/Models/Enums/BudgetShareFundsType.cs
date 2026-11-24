using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// BudgetShareFundsType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BudgetShareFundsType>))]
public sealed record BudgetShareFundsType : OpenStringEnum<BudgetShareFundsType>
{
    private BudgetShareFundsType(string value) : base(value)
    {
    }

    public static readonly BudgetShareFundsType DoNotShare = new("DO_NOT_SHARE");

    public static readonly BudgetShareFundsType ShareManually = new("SHARE_MANUALLY");

    public static readonly BudgetShareFundsType ShareWithAllOwners = new("SHARE_WITH_ALL_OWNERS");

    public static readonly BudgetShareFundsType ShareWithAllMembers = new("SHARE_WITH_ALL_MEMBERS");

    public static readonly BudgetShareFundsType ShareAllOwnersButMembersManually = new(
        "SHARE_ALL_OWNERS_BUT_MEMBERS_MANUALLY");

    public TResult Match<TResult>(Func<TResult> onDoNotShare,
        Func<TResult> onShareManually,
        Func<TResult> onShareWithAllOwners,
        Func<TResult> onShareWithAllMembers,
        Func<TResult> onShareAllOwnersButMembersManually,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DoNotShare => onDoNotShare(),
            _ when this == ShareManually => onShareManually(),
            _ when this == ShareWithAllOwners => onShareWithAllOwners(),
            _ when this == ShareWithAllMembers => onShareWithAllMembers(),
            _ when this == ShareAllOwnersButMembersManually => onShareAllOwnersButMembersManually(),
            _ => otherwise(Value)
        };

    public void Match(Action onDoNotShare,
        Action onShareManually,
        Action onShareWithAllOwners,
        Action onShareWithAllMembers,
        Action onShareAllOwnersButMembersManually,
        Action<string> otherwise)
    {
        if (this == DoNotShare) onDoNotShare();
        else if (this == ShareManually) onShareManually();
        else if (this == ShareWithAllOwners) onShareWithAllOwners();
        else if (this == ShareWithAllMembers) onShareWithAllMembers();
        else if (this == ShareAllOwnersButMembersManually) onShareAllOwnersButMembersManually();
        else otherwise(Value);
    }
}
