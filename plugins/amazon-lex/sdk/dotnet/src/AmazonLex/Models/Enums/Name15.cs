using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to group the session by their end state or their locale.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name15>))]
public sealed record Name15 : OpenStringEnum<Name15>
{
    private Name15(string value) : base(value)
    {
    }

    public static readonly Name15 ConversationEndState = new("ConversationEndState");

    public static readonly Name15 LocaleId = new("LocaleId");

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
