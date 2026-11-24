using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the bot. If the status is Failed, the reasons for the failure are listed in the failureReasons field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotLocaleStatus4>))]
public sealed record BotLocaleStatus4 : OpenStringEnum<BotLocaleStatus4>
{
    private BotLocaleStatus4(string value) : base(value)
    {
    }

    public static readonly BotLocaleStatus4 Creating = new("Creating");

    public static readonly BotLocaleStatus4 Building = new("Building");

    public static readonly BotLocaleStatus4 Built = new("Built");

    public static readonly BotLocaleStatus4 ReadyExpressTesting = new("ReadyExpressTesting");

    public static readonly BotLocaleStatus4 Failed = new("Failed");

    public static readonly BotLocaleStatus4 Deleting = new("Deleting");

    public static readonly BotLocaleStatus4 NotBuilt = new("NotBuilt");

    public static readonly BotLocaleStatus4 Importing = new("Importing");

    public static readonly BotLocaleStatus4 Processing = new("Processing");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onBuilding,
        Func<TResult> onBuilt,
        Func<TResult> onReadyExpressTesting,
        Func<TResult> onFailed,
        Func<TResult> onDeleting,
        Func<TResult> onNotBuilt,
        Func<TResult> onImporting,
        Func<TResult> onProcessing,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Building => onBuilding(),
            _ when this == Built => onBuilt(),
            _ when this == ReadyExpressTesting => onReadyExpressTesting(),
            _ when this == Failed => onFailed(),
            _ when this == Deleting => onDeleting(),
            _ when this == NotBuilt => onNotBuilt(),
            _ when this == Importing => onImporting(),
            _ when this == Processing => onProcessing(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onBuilding,
        Action onBuilt,
        Action onReadyExpressTesting,
        Action onFailed,
        Action onDeleting,
        Action onNotBuilt,
        Action onImporting,
        Action onProcessing,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Building) onBuilding();
        else if (this == Built) onBuilt();
        else if (this == ReadyExpressTesting) onReadyExpressTesting();
        else if (this == Failed) onFailed();
        else if (this == Deleting) onDeleting();
        else if (this == NotBuilt) onNotBuilt();
        else if (this == Importing) onImporting();
        else if (this == Processing) onProcessing();
        else otherwise(Value);
    }
}
