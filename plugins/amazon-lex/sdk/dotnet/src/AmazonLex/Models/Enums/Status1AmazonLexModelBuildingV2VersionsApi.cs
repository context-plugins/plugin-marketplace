using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the bot. When the status is BUILDING Amazon Lex is building the bot for testing and use. If the status of the bot is READY_BASIC_TESTING, you can test the bot using the exact utterances specified in the bot's intents. When the bot is ready for full testing or to run, the status is READY. If there was a problem with building the bot, the status is FAILED and the failureReason field explains why the bot did not build. If the bot was saved but not built, the status is NOT_BUILT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AmazonLexModelBuildingV2VersionsApi>))]
public sealed record Status1AmazonLexModelBuildingV2VersionsApi : OpenStringEnum<Status1AmazonLexModelBuildingV2VersionsApi>
{
    private Status1AmazonLexModelBuildingV2VersionsApi(string value) : base(value)
    {
    }

    public static readonly Status1AmazonLexModelBuildingV2VersionsApi Building = new("BUILDING");

    public static readonly Status1AmazonLexModelBuildingV2VersionsApi Ready = new("READY");

    public static readonly Status1AmazonLexModelBuildingV2VersionsApi ReadyBasicTesting = new("READY_BASIC_TESTING");

    public static readonly Status1AmazonLexModelBuildingV2VersionsApi Failed = new("FAILED");

    public static readonly Status1AmazonLexModelBuildingV2VersionsApi NotBuilt = new("NOT_BUILT");

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
