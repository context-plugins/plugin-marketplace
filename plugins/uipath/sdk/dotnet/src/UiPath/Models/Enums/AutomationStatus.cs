using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Whether the test case is linked to an automated robot process
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutomationStatus>))]
public sealed record AutomationStatus : OpenStringEnum<AutomationStatus>
{
    private AutomationStatus(string value) : base(value)
    {
    }

    public static readonly AutomationStatus NotAutomated = new("NotAutomated");

    public static readonly AutomationStatus Automated = new("Automated");

    public TResult Match<TResult>(Func<TResult> onNotAutomated,
        Func<TResult> onAutomated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotAutomated => onNotAutomated(),
            _ when this == Automated => onAutomated(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotAutomated, Action onAutomated, Action<string> otherwise)
    {
        if (this == NotAutomated) onNotAutomated();
        else if (this == Automated) onAutomated();
        else otherwise(Value);
    }
}
