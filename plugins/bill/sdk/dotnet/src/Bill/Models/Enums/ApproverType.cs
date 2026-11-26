using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Spend \&amp; Expense transactions approver type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApproverType>))]
public sealed record ApproverType : OpenStringEnum<ApproverType>
{
    private ApproverType(string value) : base(value)
    {
    }

    public static readonly ApproverType Admin = new("ADMIN");

    public static readonly ApproverType Manager = new("MANAGER");

    public static readonly ApproverType NextManager = new("NEXT_MANAGER");

    public static readonly ApproverType BudgetOwner = new("BUDGET_OWNER");

    public static readonly ApproverType Bookkeeper = new("BOOKKEEPER");

    public static readonly ApproverType SpecificPerson = new("SPECIFIC_PERSON");

    public TResult Match<TResult>(Func<TResult> onAdmin,
        Func<TResult> onManager,
        Func<TResult> onNextManager,
        Func<TResult> onBudgetOwner,
        Func<TResult> onBookkeeper,
        Func<TResult> onSpecificPerson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Admin => onAdmin(),
            _ when this == Manager => onManager(),
            _ when this == NextManager => onNextManager(),
            _ when this == BudgetOwner => onBudgetOwner(),
            _ when this == Bookkeeper => onBookkeeper(),
            _ when this == SpecificPerson => onSpecificPerson(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdmin,
        Action onManager,
        Action onNextManager,
        Action onBudgetOwner,
        Action onBookkeeper,
        Action onSpecificPerson,
        Action<string> otherwise)
    {
        if (this == Admin) onAdmin();
        else if (this == Manager) onManager();
        else if (this == NextManager) onNextManager();
        else if (this == BudgetOwner) onBudgetOwner();
        else if (this == Bookkeeper) onBookkeeper();
        else if (this == SpecificPerson) onSpecificPerson();
        else otherwise(Value);
    }
}
