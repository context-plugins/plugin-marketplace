using System;
using System.Text.Json.Serialization;
using MrScraper.Core.Enum;

namespace MrScraper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TaskDeviceOs>))]
public sealed record TaskDeviceOs : OpenStringEnum<TaskDeviceOs>
{
    private TaskDeviceOs(string value) : base(value)
    {
    }

    public static readonly TaskDeviceOs DeviceWindows = new("WINDOWS");

    public static readonly TaskDeviceOs DeviceMacOs = new("MACOS");

    public static readonly TaskDeviceOs DeviceLinux = new("LINUX");

    public TResult Match<TResult>(Func<TResult> onDeviceWindows,
        Func<TResult> onDeviceMacOs,
        Func<TResult> onDeviceLinux,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeviceWindows => onDeviceWindows(),
            _ when this == DeviceMacOs => onDeviceMacOs(),
            _ when this == DeviceLinux => onDeviceLinux(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeviceWindows, Action onDeviceMacOs, Action onDeviceLinux, Action<string> otherwise)
    {
        if (this == DeviceWindows) onDeviceWindows();
        else if (this == DeviceMacOs) onDeviceMacOs();
        else if (this == DeviceLinux) onDeviceLinux();
        else otherwise(Value);
    }
}
