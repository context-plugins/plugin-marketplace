using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// When you send a request to create a bot with processBehavior set to BUILD, Amazon Lex sets the status response element to BUILDING. In the READY_BASIC_TESTING state you can test the bot with user inputs that exactly match the utterances configured for the bot's intents and values in the slot types. If Amazon Lex can't build the bot, Amazon Lex sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element. When you set processBehavior to SAVE, Amazon Lex sets the status code to NOT BUILT. When the bot is in the READY state you can test and publish th
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Building = new("BUILDING");

    public static readonly Status3 Ready = new("READY");

    public static readonly Status3 ReadyBasicTesting = new("READY_BASIC_TESTING");

    public static readonly Status3 Failed = new("FAILED");

    public static readonly Status3 NotBuilt = new("NOT_BUILT");

    public TResult Match<TResult>(Func<TResult> onBuilding,
        Func<TResult> onReady,
        Func<TResult> onReadyBasicTesting,
        Func<TResult> onFailed,
        Func<TResult> onNotBuilt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Building => onBuilding(),
            _ when this == Ready => onReady(),
            _ when this == ReadyBasicTesting => onReadyBasicTesting(),
            _ when this == Failed => onFailed(),
            _ when this == NotBuilt => onNotBuilt(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuilding,
        Action onReady,
        Action onReadyBasicTesting,
        Action onFailed,
        Action onNotBuilt,
        Action<string> otherwise)
    {
        if (this == Building) onBuilding();
        else if (this == Ready) onReady();
        else if (this == ReadyBasicTesting) onReadyBasicTesting();
        else if (this == Failed) onFailed();
        else if (this == NotBuilt) onNotBuilt();
        else otherwise(Value);
    }
}
