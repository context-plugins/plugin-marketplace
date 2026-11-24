using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum representing the actor role for reimbursements in the Spend API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActorRole>))]
public sealed record ActorRole : OpenStringEnum<ActorRole>
{
    private ActorRole(string value) : base(value)
    {
    }

    public static readonly ActorRole Submitter = new("SUBMITTER");

    public static readonly ActorRole Manager = new("MANAGER");

    public static readonly ActorRole BudgetOwner = new("BUDGET_OWNER");

    public static readonly ActorRole Admin = new("ADMIN");

    public static readonly ActorRole System = new("SYSTEM");

    public TResult Match<TResult>(Func<TResult> onSubmitter,
        Func<TResult> onManager,
        Func<TResult> onBudgetOwner,
        Func<TResult> onAdmin,
        Func<TResult> onSystem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitter => onSubmitter(),
            _ when this == Manager => onManager(),
            _ when this == BudgetOwner => onBudgetOwner(),
            _ when this == Admin => onAdmin(),
            _ when this == System => onSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitter,
        Action onManager,
        Action onBudgetOwner,
        Action onAdmin,
        Action onSystem,
        Action<string> otherwise)
    {
        if (this == Submitter) onSubmitter();
        else if (this == Manager) onManager();
        else if (this == BudgetOwner) onBudgetOwner();
        else if (this == Admin) onAdmin();
        else if (this == System) onSystem();
        else otherwise(Value);
    }
}
