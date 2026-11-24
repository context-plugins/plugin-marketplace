using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the bot channel. CREATED - The channel has been created and is ready for use. IN_PROGRESS - Channel creation is in progress. FAILED - There was an error creating the channel. For information about the reason for the failure, see the failureReason field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonLexModelBuildingV2ChannelsApi>))]
public sealed record StatusAmazonLexModelBuildingV2ChannelsApi : OpenStringEnum<StatusAmazonLexModelBuildingV2ChannelsApi>
{
    private StatusAmazonLexModelBuildingV2ChannelsApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonLexModelBuildingV2ChannelsApi InProgress = new("IN_PROGRESS");

    public static readonly StatusAmazonLexModelBuildingV2ChannelsApi Created = new("CREATED");

    public static readonly StatusAmazonLexModelBuildingV2ChannelsApi Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCreated,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Created => onCreated(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCreated, Action onFailed, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Created) onCreated();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
