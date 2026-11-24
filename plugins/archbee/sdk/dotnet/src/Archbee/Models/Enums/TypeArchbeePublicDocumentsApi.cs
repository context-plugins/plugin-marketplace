using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. which type of search to use; default is word-based
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeArchbeePublicDocumentsApi>))]
public sealed record TypeArchbeePublicDocumentsApi : OpenStringEnum<TypeArchbeePublicDocumentsApi>
{
    private TypeArchbeePublicDocumentsApi(string value) : base(value)
    {
    }

    public static readonly TypeArchbeePublicDocumentsApi Words = new("words");

    public static readonly TypeArchbeePublicDocumentsApi AiChat = new("ai-chat");

    public static readonly TypeArchbeePublicDocumentsApi AiRetrieval = new("ai-retrieval");

    public TResult Match<TResult>(Func<TResult> onWords,
        Func<TResult> onAiChat,
        Func<TResult> onAiRetrieval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Words => onWords(),
            _ when this == AiChat => onAiChat(),
            _ when this == AiRetrieval => onAiRetrieval(),
            _ => otherwise(Value)
        };

    public void Match(Action onWords, Action onAiChat, Action onAiRetrieval, Action<string> otherwise)
    {
        if (this == Words) onWords();
        else if (this == AiChat) onAiChat();
        else if (this == AiRetrieval) onAiRetrieval();
        else otherwise(Value);
    }
}
