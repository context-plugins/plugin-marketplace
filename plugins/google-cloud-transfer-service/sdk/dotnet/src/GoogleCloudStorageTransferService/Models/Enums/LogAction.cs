using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LogAction>))]
public sealed record LogAction : OpenStringEnum<LogAction>
{
    private LogAction(string value) : base(value)
    {
    }

    public static readonly LogAction LoggableActionUnspecified = new("LOGGABLE_ACTION_UNSPECIFIED");

    public static readonly LogAction Find = new("FIND");

    public static readonly LogAction Delete = new("DELETE");

    public static readonly LogAction Copy = new("COPY");

    public TResult Match<TResult>(Func<TResult> onLoggableActionUnspecified,
        Func<TResult> onFind,
        Func<TResult> onDelete,
        Func<TResult> onCopy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LoggableActionUnspecified => onLoggableActionUnspecified(),
            _ when this == Find => onFind(),
            _ when this == Delete => onDelete(),
            _ when this == Copy => onCopy(),
            _ => otherwise(Value)
        };

    public void Match(Action onLoggableActionUnspecified,
        Action onFind,
        Action onDelete,
        Action onCopy,
        Action<string> otherwise)
    {
        if (this == LoggableActionUnspecified) onLoggableActionUnspecified();
        else if (this == Find) onFind();
        else if (this == Delete) onDelete();
        else if (this == Copy) onCopy();
        else otherwise(Value);
    }
}
