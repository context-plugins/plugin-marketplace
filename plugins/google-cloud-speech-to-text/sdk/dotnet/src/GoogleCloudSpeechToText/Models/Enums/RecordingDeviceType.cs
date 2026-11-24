using System;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Enum;

namespace GoogleCloudSpeechToText.Models.Enums;

/// <summary>
/// The type of device the speech was recorded with.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RecordingDeviceType>))]
public sealed record RecordingDeviceType : OpenStringEnum<RecordingDeviceType>
{
    private RecordingDeviceType(string value) : base(value)
    {
    }

    public static readonly RecordingDeviceType RecordingDeviceTypeUnspecified = new(
        "RECORDING_DEVICE_TYPE_UNSPECIFIED");

    public static readonly RecordingDeviceType Smartphone = new("SMARTPHONE");

    public static readonly RecordingDeviceType Pc = new("PC");

    public static readonly RecordingDeviceType PhoneLine = new("PHONE_LINE");

    public static readonly RecordingDeviceType Vehicle = new("VEHICLE");

    public static readonly RecordingDeviceType OtherOutdoorDevice = new("OTHER_OUTDOOR_DEVICE");

    public static readonly RecordingDeviceType OtherIndoorDevice = new("OTHER_INDOOR_DEVICE");

    public TResult Match<TResult>(Func<TResult> onRecordingDeviceTypeUnspecified,
        Func<TResult> onSmartphone,
        Func<TResult> onPc,
        Func<TResult> onPhoneLine,
        Func<TResult> onVehicle,
        Func<TResult> onOtherOutdoorDevice,
        Func<TResult> onOtherIndoorDevice,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RecordingDeviceTypeUnspecified => onRecordingDeviceTypeUnspecified(),
            _ when this == Smartphone => onSmartphone(),
            _ when this == Pc => onPc(),
            _ when this == PhoneLine => onPhoneLine(),
            _ when this == Vehicle => onVehicle(),
            _ when this == OtherOutdoorDevice => onOtherOutdoorDevice(),
            _ when this == OtherIndoorDevice => onOtherIndoorDevice(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecordingDeviceTypeUnspecified,
        Action onSmartphone,
        Action onPc,
        Action onPhoneLine,
        Action onVehicle,
        Action onOtherOutdoorDevice,
        Action onOtherIndoorDevice,
        Action<string> otherwise)
    {
        if (this == RecordingDeviceTypeUnspecified) onRecordingDeviceTypeUnspecified();
        else if (this == Smartphone) onSmartphone();
        else if (this == Pc) onPc();
        else if (this == PhoneLine) onPhoneLine();
        else if (this == Vehicle) onVehicle();
        else if (this == OtherOutdoorDevice) onOtherOutdoorDevice();
        else if (this == OtherIndoorDevice) onOtherIndoorDevice();
        else otherwise(Value);
    }
}
