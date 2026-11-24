using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

/// <summary>
/// Deployment status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusBusinessCentralAutomationApiV20ExtensionDeployment>))]
public sealed record StatusBusinessCentralAutomationApiV20ExtensionDeployment : OpenStringEnum<StatusBusinessCentralAutomationApiV20ExtensionDeployment>
{
    private StatusBusinessCentralAutomationApiV20ExtensionDeployment(string value) : base(value)
    {
    }

    public static readonly StatusBusinessCentralAutomationApiV20ExtensionDeployment Unknown = new("Unknown");

    public static readonly StatusBusinessCentralAutomationApiV20ExtensionDeployment InProgress = new("InProgress");

    public static readonly StatusBusinessCentralAutomationApiV20ExtensionDeployment Completed = new("Completed");

    public static readonly StatusBusinessCentralAutomationApiV20ExtensionDeployment Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown,
        Action onInProgress,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
