using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceType>))]
public sealed record ResourceType : OpenStringEnum<ResourceType>
{
    private ResourceType(string value) : base(value)
    {
    }

    public static readonly ResourceType Alerts = new("alerts");

    public static readonly ResourceType Budgets = new("budgets");

    public static readonly ResourceType Reports = new("reports");

    public static readonly ResourceType Allocations = new("allocations");

    public TResult Match<TResult>(Func<TResult> onAlerts,
        Func<TResult> onBudgets,
        Func<TResult> onReports,
        Func<TResult> onAllocations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Alerts => onAlerts(),
            _ when this == Budgets => onBudgets(),
            _ when this == Reports => onReports(),
            _ when this == Allocations => onAllocations(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlerts,
        Action onBudgets,
        Action onReports,
        Action onAllocations,
        Action<string> otherwise)
    {
        if (this == Alerts) onAlerts();
        else if (this == Budgets) onBudgets();
        else if (this == Reports) onReports();
        else if (this == Allocations) onAllocations();
        else otherwise(Value);
    }
}
