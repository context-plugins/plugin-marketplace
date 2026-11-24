using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The updated status of the analysis. The status will be Stopping and will eventually transition to Stopped. Valid Values: Processing | Available | Failed | Stopping | Stopped
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAnalyzerStatus3>))]
public sealed record BotAnalyzerStatus3 : OpenStringEnum<BotAnalyzerStatus3>
{
    private BotAnalyzerStatus3(string value) : base(value)
    {
    }

    public static readonly BotAnalyzerStatus3 Processing = new("Processing");

    public static readonly BotAnalyzerStatus3 Available = new("Available");

    public static readonly BotAnalyzerStatus3 Failed = new("Failed");

    public static readonly BotAnalyzerStatus3 Stopping = new("Stopping");

    public static readonly BotAnalyzerStatus3 Stopped = new("Stopped");

    public TResult Match<TResult>(Func<TResult> onProcessing,
        Func<TResult> onAvailable,
        Func<TResult> onFailed,
        Func<TResult> onStopping,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processing => onProcessing(),
            _ when this == Available => onAvailable(),
            _ when this == Failed => onFailed(),
            _ when this == Stopping => onStopping(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessing,
        Action onAvailable,
        Action onFailed,
        Action onStopping,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Processing) onProcessing();
        else if (this == Available) onAvailable();
        else if (this == Failed) onFailed();
        else if (this == Stopping) onStopping();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
