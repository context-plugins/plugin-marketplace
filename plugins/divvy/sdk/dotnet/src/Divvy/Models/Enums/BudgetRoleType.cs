using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Options for setting a user's role within a budget. DELETE removes the user from the budget.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BudgetRoleType>))]
public sealed record BudgetRoleType : OpenStringEnum<BudgetRoleType>
{
    private BudgetRoleType(string value) : base(value)
    {
    }

    public static readonly BudgetRoleType Member = new("MEMBER");

    public static readonly BudgetRoleType Owner = new("OWNER");

    public static readonly BudgetRoleType Observer = new("OBSERVER");

    public TResult Match<TResult>(Func<TResult> onMember,
        Func<TResult> onOwner,
        Func<TResult> onObserver,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Member => onMember(),
            _ when this == Owner => onOwner(),
            _ when this == Observer => onObserver(),
            _ => otherwise(Value)
        };

    public void Match(Action onMember, Action onOwner, Action onObserver, Action<string> otherwise)
    {
        if (this == Member) onMember();
        else if (this == Owner) onOwner();
        else if (this == Observer) onObserver();
        else otherwise(Value);
    }
}
