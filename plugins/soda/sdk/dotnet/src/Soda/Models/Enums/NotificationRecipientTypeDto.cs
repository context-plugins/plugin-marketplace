using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationRecipientTypeDto>))]
public sealed record NotificationRecipientTypeDto : OpenStringEnum<NotificationRecipientTypeDto>
{
    private NotificationRecipientTypeDto(string value) : base(value)
    {
    }

    public static readonly NotificationRecipientTypeDto Email = new("email");

    public static readonly NotificationRecipientTypeDto User = new("user");

    public static readonly NotificationRecipientTypeDto UserGroup = new("userGroup");

    public static readonly NotificationRecipientTypeDto Integration = new("integration");

    public static readonly NotificationRecipientTypeDto ResourceRole = new("resourceRole");

    public static readonly NotificationRecipientTypeDto CustomRole = new("customRole");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onUser,
        Func<TResult> onUserGroup,
        Func<TResult> onIntegration,
        Func<TResult> onResourceRole,
        Func<TResult> onCustomRole,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == User => onUser(),
            _ when this == UserGroup => onUserGroup(),
            _ when this == Integration => onIntegration(),
            _ when this == ResourceRole => onResourceRole(),
            _ when this == CustomRole => onCustomRole(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail,
        Action onUser,
        Action onUserGroup,
        Action onIntegration,
        Action onResourceRole,
        Action onCustomRole,
        Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == User) onUser();
        else if (this == UserGroup) onUserGroup();
        else if (this == Integration) onIntegration();
        else if (this == ResourceRole) onResourceRole();
        else if (this == CustomRole) onCustomRole();
        else otherwise(Value);
    }
}
