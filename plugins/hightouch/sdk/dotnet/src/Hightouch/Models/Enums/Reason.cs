using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// Reason for rejection, present when <c>status</c> is <c>"rejected"</c>.
/// - <c>invalid_handle</c> — the delivery address is not a valid email or phone number
/// - <c>missing_variables</c> — one or more required template variables are absent
///   (<c>handle</c> recipients only; <c>id</c> recipients are checked at send time)
/// - <c>invalid_id</c> — the profile ID is empty or missing
/// - <c>missing_handle_or_id</c> — the recipient has neither <c>handle</c> nor <c>id</c>
/// - <c>invalid_locale</c> — the <c>locale</c> is empty or longer than 7 characters
/// - <c>whatsapp_marketing_us_number</c> — the message uses a marketing WhatsApp template, which Meta does not deliver to US phone numbers
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason InvalidHandle = new("invalid_handle");

    public static readonly Reason MissingVariables = new("missing_variables");

    public static readonly Reason InvalidId = new("invalid_id");

    public static readonly Reason MissingHandleOrId = new("missing_handle_or_id");

    public static readonly Reason InvalidLocale = new("invalid_locale");

    public static readonly Reason WhatsappMarketingUsNumber = new("whatsapp_marketing_us_number");

    public TResult Match<TResult>(Func<TResult> onInvalidHandle,
        Func<TResult> onMissingVariables,
        Func<TResult> onInvalidId,
        Func<TResult> onMissingHandleOrId,
        Func<TResult> onInvalidLocale,
        Func<TResult> onWhatsappMarketingUsNumber,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidHandle => onInvalidHandle(),
            _ when this == MissingVariables => onMissingVariables(),
            _ when this == InvalidId => onInvalidId(),
            _ when this == MissingHandleOrId => onMissingHandleOrId(),
            _ when this == InvalidLocale => onInvalidLocale(),
            _ when this == WhatsappMarketingUsNumber => onWhatsappMarketingUsNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidHandle,
        Action onMissingVariables,
        Action onInvalidId,
        Action onMissingHandleOrId,
        Action onInvalidLocale,
        Action onWhatsappMarketingUsNumber,
        Action<string> otherwise)
    {
        if (this == InvalidHandle) onInvalidHandle();
        else if (this == MissingVariables) onMissingVariables();
        else if (this == InvalidId) onInvalidId();
        else if (this == MissingHandleOrId) onMissingHandleOrId();
        else if (this == InvalidLocale) onInvalidLocale();
        else if (this == WhatsappMarketingUsNumber) onWhatsappMarketingUsNumber();
        else otherwise(Value);
    }
}
