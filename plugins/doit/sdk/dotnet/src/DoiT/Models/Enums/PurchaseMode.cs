using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Whether purchases execute automatically or require customer approval before the planner proceeds. Configured in the DoiT Console Settings tab; this settings API is read-only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PurchaseMode>))]
public sealed record PurchaseMode : OpenStringEnum<PurchaseMode>
{
    private PurchaseMode(string value) : base(value)
    {
    }

    public static readonly PurchaseMode Autonomous = new("autonomous");

    public static readonly PurchaseMode RequiresApproval = new("requires_approval");

    public TResult Match<TResult>(Func<TResult> onAutonomous,
        Func<TResult> onRequiresApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Autonomous => onAutonomous(),
            _ when this == RequiresApproval => onRequiresApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onAutonomous, Action onRequiresApproval, Action<string> otherwise)
    {
        if (this == Autonomous) onAutonomous();
        else if (this == RequiresApproval) onRequiresApproval();
        else otherwise(Value);
    }
}
