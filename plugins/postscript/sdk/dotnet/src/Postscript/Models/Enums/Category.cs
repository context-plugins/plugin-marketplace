using System;
using System.Text.Json.Serialization;
using Postscript.Core.Enum;

namespace Postscript.Models.Enums;

/// <summary>
/// The category of message you are sending.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Promotional = new("promotional");

    public static readonly Category Transactional = new("transactional");

    public static readonly Category Conversational = new("conversational");

    public TResult Match<TResult>(Func<TResult> onPromotional,
        Func<TResult> onTransactional,
        Func<TResult> onConversational,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Promotional => onPromotional(),
            _ when this == Transactional => onTransactional(),
            _ when this == Conversational => onConversational(),
            _ => otherwise(Value)
        };

    public void Match(Action onPromotional, Action onTransactional, Action onConversational, Action<string> otherwise)
    {
        if (this == Promotional) onPromotional();
        else if (this == Transactional) onTransactional();
        else if (this == Conversational) onConversational();
        else otherwise(Value);
    }
}
