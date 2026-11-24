using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the bot.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Building = new("BUILDING");

    public static readonly Status Ready = new("READY");

    public static readonly Status ReadyBasicTesting = new("READY_BASIC_TESTING");

    public static readonly Status Failed = new("FAILED");

    public static readonly Status NotBuilt = new("NOT_BUILT");

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
