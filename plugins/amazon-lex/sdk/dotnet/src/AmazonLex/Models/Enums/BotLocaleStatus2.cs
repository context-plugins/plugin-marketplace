using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the bot. When the status is Creating the bot locale is being configured. When the status is Building Amazon Lex is building the bot for testing and use. If the status of the bot is ReadyExpressTesting, you can test the bot using the exact utterances specified in the bots' intents. When the bot is ready for full testing or to run, the status is Built. If there was a problem with building the bot, the status is Failed. If the bot was saved but not built, the status is NotBuilt.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotLocaleStatus2>))]
public sealed record BotLocaleStatus2 : OpenStringEnum<BotLocaleStatus2>
{
    private BotLocaleStatus2(string value) : base(value)
    {
    }

    public static readonly BotLocaleStatus2 Creating = new("Creating");

    public static readonly BotLocaleStatus2 Building = new("Building");

    public static readonly BotLocaleStatus2 Built = new("Built");

    public static readonly BotLocaleStatus2 ReadyExpressTesting = new("ReadyExpressTesting");

    public static readonly BotLocaleStatus2 Failed = new("Failed");

    public static readonly BotLocaleStatus2 Deleting = new("Deleting");

    public static readonly BotLocaleStatus2 NotBuilt = new("NotBuilt");

    public static readonly BotLocaleStatus2 Importing = new("Importing");

    public static readonly BotLocaleStatus2 Processing = new("Processing");

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
