using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// When you send a request to create or update a bot, Amazon Lex sets the status response element to BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2AmazonLexModelBuildingV2VersionsApi>))]
public sealed record Status2AmazonLexModelBuildingV2VersionsApi : OpenStringEnum<Status2AmazonLexModelBuildingV2VersionsApi>
{
    private Status2AmazonLexModelBuildingV2VersionsApi(string value) : base(value)
    {
    }

    public static readonly Status2AmazonLexModelBuildingV2VersionsApi Building = new("BUILDING");

    public static readonly Status2AmazonLexModelBuildingV2VersionsApi Ready = new("READY");

    public static readonly Status2AmazonLexModelBuildingV2VersionsApi ReadyBasicTesting = new("READY_BASIC_TESTING");

    public static readonly Status2AmazonLexModelBuildingV2VersionsApi Failed = new("FAILED");

    public static readonly Status2AmazonLexModelBuildingV2VersionsApi NotBuilt = new("NOT_BUILT");

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
