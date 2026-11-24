using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// When you send a request to create or update a bot, Amazon Lex sets the status response element to BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Building = new("BUILDING");

    public static readonly Status1 Ready = new("READY");

    public static readonly Status1 ReadyBasicTesting = new("READY_BASIC_TESTING");

    public static readonly Status1 Failed = new("FAILED");

    public static readonly Status1 NotBuilt = new("NOT_BUILT");

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
