using System;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Enum;

namespace GoogleCloudBuild.Models.Enums;

/// <summary>
/// The log type that this config enables.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogType>))]
public sealed record LogType : OpenStringEnum<LogType>
{
    private LogType(string value) : base(value)
    {
    }

    public static readonly LogType LogTypeUnspecified = new("LOG_TYPE_UNSPECIFIED");

    public static readonly LogType AdminRead = new("ADMIN_READ");

    public static readonly LogType DataWrite = new("DATA_WRITE");

    public static readonly LogType DataRead = new("DATA_READ");

    public TResult Match<TResult>(Func<TResult> onLogTypeUnspecified,
        Func<TResult> onAdminRead,
        Func<TResult> onDataWrite,
        Func<TResult> onDataRead,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LogTypeUnspecified => onLogTypeUnspecified(),
            _ when this == AdminRead => onAdminRead(),
            _ when this == DataWrite => onDataWrite(),
            _ when this == DataRead => onDataRead(),
            _ => otherwise(Value)
        };

    public void Match(Action onLogTypeUnspecified,
        Action onAdminRead,
        Action onDataWrite,
        Action onDataRead,
        Action<string> otherwise)
    {
        if (this == LogTypeUnspecified) onLogTypeUnspecified();
        else if (this == AdminRead) onAdminRead();
        else if (this == DataWrite) onDataWrite();
        else if (this == DataRead) onDataRead();
        else otherwise(Value);
    }
}
