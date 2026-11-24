using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHightouchSignupsApi>))]
public sealed record StatusHightouchSignupsApi : OpenStringEnum<StatusHightouchSignupsApi>
{
    private StatusHightouchSignupsApi(string value) : base(value)
    {
    }

    public static readonly StatusHightouchSignupsApi Subscribed = new("subscribed");

    public static readonly StatusHightouchSignupsApi DoiPendingConfirmation = new("doi_pending_confirmation");

    public TResult Match<TResult>(Func<TResult> onSubscribed,
        Func<TResult> onDoiPendingConfirmation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Subscribed => onSubscribed(),
            _ when this == DoiPendingConfirmation => onDoiPendingConfirmation(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubscribed, Action onDoiPendingConfirmation, Action<string> otherwise)
    {
        if (this == Subscribed) onSubscribed();
        else if (this == DoiPendingConfirmation) onDoiPendingConfirmation();
        else otherwise(Value);
    }
}
