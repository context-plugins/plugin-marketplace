using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details how transactions captured by the <c>Merchant</c> are settled.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReadyToSettleUpon>))]
public sealed record ReadyToSettleUpon : OpenStringEnum<ReadyToSettleUpon>
{
    private ReadyToSettleUpon(string value) : base(value)
    {
    }

    public static readonly ReadyToSettleUpon Reconciliation = new("RECONCILIATION");

    public static readonly ReadyToSettleUpon SuccessfulCapture = new("SUCCESSFUL_CAPTURE");

    public static readonly ReadyToSettleUpon ProcessorWindow = new("PROCESSOR_WINDOW");

    public static readonly ReadyToSettleUpon ConfigurableWindow = new("CONFIGURABLE_WINDOW");

    public TResult Match<TResult>(Func<TResult> onReconciliation,
        Func<TResult> onSuccessfulCapture,
        Func<TResult> onProcessorWindow,
        Func<TResult> onConfigurableWindow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Reconciliation => onReconciliation(),
            _ when this == SuccessfulCapture => onSuccessfulCapture(),
            _ when this == ProcessorWindow => onProcessorWindow(),
            _ when this == ConfigurableWindow => onConfigurableWindow(),
            _ => otherwise(Value)
        };

    public void Match(Action onReconciliation,
        Action onSuccessfulCapture,
        Action onProcessorWindow,
        Action onConfigurableWindow,
        Action<string> otherwise)
    {
        if (this == Reconciliation) onReconciliation();
        else if (this == SuccessfulCapture) onSuccessfulCapture();
        else if (this == ProcessorWindow) onProcessorWindow();
        else if (this == ConfigurableWindow) onConfigurableWindow();
        else otherwise(Value);
    }
}
