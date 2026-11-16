using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details how the <c>Merchant</c> settles fees.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeeReadyToSettleUpon>))]
public sealed record FeeReadyToSettleUpon : OpenStringEnum<FeeReadyToSettleUpon>
{
    private FeeReadyToSettleUpon(string value) : base(value)
    {
    }

    public static readonly FeeReadyToSettleUpon Reconciliation = new("RECONCILIATION");

    public static readonly FeeReadyToSettleUpon SuccessfulCapture = new("SUCCESSFUL_CAPTURE");

    public static readonly FeeReadyToSettleUpon ProcessorWindow = new("PROCESSOR_WINDOW");

    public static readonly FeeReadyToSettleUpon ConfigurableWindow = new("CONFIGURABLE_WINDOW");

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
