using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// The subset of BudgetShareFundsType options that users are allowed to use for updates/creates. (Other options are read-only.)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EditBudgetShareFundsType>))]
public sealed record EditBudgetShareFundsType : OpenStringEnum<EditBudgetShareFundsType>
{
    private EditBudgetShareFundsType(string value) : base(value)
    {
    }

    public static readonly EditBudgetShareFundsType DoNotShare = new("DO_NOT_SHARE");

    public static readonly EditBudgetShareFundsType ShareManually = new("SHARE_MANUALLY");

    public TResult Match<TResult>(Func<TResult> onDoNotShare,
        Func<TResult> onShareManually,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DoNotShare => onDoNotShare(),
            _ when this == ShareManually => onShareManually(),
            _ => otherwise(Value)
        };

    public void Match(Action onDoNotShare, Action onShareManually, Action<string> otherwise)
    {
        if (this == DoNotShare) onDoNotShare();
        else if (this == ShareManually) onShareManually();
        else otherwise(Value);
    }
}
