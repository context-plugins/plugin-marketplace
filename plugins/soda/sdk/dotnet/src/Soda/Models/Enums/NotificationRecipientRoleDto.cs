using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationRecipientRoleDto>))]
public sealed record NotificationRecipientRoleDto : OpenStringEnum<NotificationRecipientRoleDto>
{
    private NotificationRecipientRoleDto(string value) : base(value)
    {
    }

    public static readonly NotificationRecipientRoleDto DatasetOwner = new("datasetOwner");

    public static readonly NotificationRecipientRoleDto MonitorOwner = new("monitorOwner");

    public TResult Match<TResult>(Func<TResult> onDatasetOwner,
        Func<TResult> onMonitorOwner,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DatasetOwner => onDatasetOwner(),
            _ when this == MonitorOwner => onMonitorOwner(),
            _ => otherwise(Value)
        };

    public void Match(Action onDatasetOwner, Action onMonitorOwner, Action<string> otherwise)
    {
        if (this == DatasetOwner) onDatasetOwner();
        else if (this == MonitorOwner) onMonitorOwner();
        else otherwise(Value);
    }
}
