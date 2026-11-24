using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the analysis. Valid Values: Processing | Available | Failed | Stopping | Stopped
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAnalyzerStatus1>))]
public sealed record BotAnalyzerStatus1 : OpenStringEnum<BotAnalyzerStatus1>
{
    private BotAnalyzerStatus1(string value) : base(value)
    {
    }

    public static readonly BotAnalyzerStatus1 Processing = new("Processing");

    public static readonly BotAnalyzerStatus1 Available = new("Available");

    public static readonly BotAnalyzerStatus1 Failed = new("Failed");

    public static readonly BotAnalyzerStatus1 Stopping = new("Stopping");

    public static readonly BotAnalyzerStatus1 Stopped = new("Stopped");

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
