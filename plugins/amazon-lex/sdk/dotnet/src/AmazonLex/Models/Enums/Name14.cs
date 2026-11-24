using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The category by which the session analytics were grouped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name14>))]
public sealed record Name14 : OpenStringEnum<Name14>
{
    private Name14(string value) : base(value)
    {
    }

    public static readonly Name14 ConversationEndState = new("ConversationEndState");

    public static readonly Name14 LocaleId = new("LocaleId");

    public TResult Match<TResult>(Func<TResult> onConversationEndState,
        Func<TResult> onLocaleId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConversationEndState => onConversationEndState(),
            _ when this == LocaleId => onLocaleId(),
            _ => otherwise(Value)
        };

    public void Match(Action onConversationEndState, Action onLocaleId, Action<string> otherwise)
    {
        if (this == ConversationEndState) onConversationEndState();
        else if (this == LocaleId) onLocaleId();
        else otherwise(Value);
    }
}
