using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(DevicesRequestConverter))]
public record DevicesRequest
{
    private readonly Optional<DeviceActivate> _deviceActivateValue;

    private readonly Optional<DeviceCancel> _deviceCancelValue;

    private readonly Optional<DeviceDeactivate> _deviceDeactivateValue;

    private readonly Optional<DeviceUpdateIdleFileImageAndMessage> _deviceUpdateIdleFileImageAndMessageValue;

    private readonly Optional<DeviceUpdateSurcharges> _deviceUpdateSurchargesValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DevicesRequest(Optional<DeviceActivate> deviceActivateValue,
        Optional<DeviceCancel> deviceCancelValue,
        Optional<DeviceDeactivate> deviceDeactivateValue,
        Optional<DeviceUpdateIdleFileImageAndMessage> deviceUpdateIdleFileImageAndMessageValue,
        Optional<DeviceUpdateSurcharges> deviceUpdateSurchargesValue,
        Optional<UnknownArm> unknownValue)
    {
        _deviceActivateValue = deviceActivateValue;
        _deviceCancelValue = deviceCancelValue;
        _deviceDeactivateValue = deviceDeactivateValue;
        _deviceUpdateIdleFileImageAndMessageValue = deviceUpdateIdleFileImageAndMessageValue;
        _deviceUpdateSurchargesValue = deviceUpdateSurchargesValue;
        _unknownValue = unknownValue;
    }

    public static DevicesRequest DeviceActivate(DeviceActivate value) =>
        new(Optional<DeviceActivate>.Some(value), default, default, default, default, default);

    public static DevicesRequest DeviceCancel(DeviceCancel value) =>
        new(default, Optional<DeviceCancel>.Some(value), default, default, default, default);

    public static DevicesRequest DeviceDeactivate(DeviceDeactivate value) =>
        new(default, default, Optional<DeviceDeactivate>.Some(value), default, default, default);

    public static DevicesRequest DeviceUpdateIdleFileImageAndMessage(DeviceUpdateIdleFileImageAndMessage value) =>
        new(default, default, default, Optional<DeviceUpdateIdleFileImageAndMessage>.Some(value), default, default);

    public static DevicesRequest DeviceUpdateSurcharges(DeviceUpdateSurcharges value) =>
        new(default, default, default, default, Optional<DeviceUpdateSurcharges>.Some(value), default);

    internal static DevicesRequest Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDeviceActivate([NotNullWhen(true)] out DeviceActivate? value) =>
        _deviceActivateValue.TryGetValue(out value);

    public bool TryGetDeviceCancel([NotNullWhen(true)] out DeviceCancel? value) =>
        _deviceCancelValue.TryGetValue(out value);

    public bool TryGetDeviceDeactivate([NotNullWhen(true)] out DeviceDeactivate? value) =>
        _deviceDeactivateValue.TryGetValue(out value);

    public bool TryGetDeviceUpdateIdleFileImageAndMessage([NotNullWhen(true)] out DeviceUpdateIdleFileImageAndMessage? value) =>
        _deviceUpdateIdleFileImageAndMessageValue.TryGetValue(out value);

    public bool TryGetDeviceUpdateSurcharges([NotNullWhen(true)] out DeviceUpdateSurcharges? value) =>
        _deviceUpdateSurchargesValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DevicesRequest(DeviceActivate value) => DeviceActivate(value);

    public static implicit operator DevicesRequest(DeviceCancel value) => DeviceCancel(value);

    public static implicit operator DevicesRequest(DeviceDeactivate value) => DeviceDeactivate(value);

    public static implicit operator DevicesRequest(DeviceUpdateIdleFileImageAndMessage value) =>
        DeviceUpdateIdleFileImageAndMessage(value);

    public static implicit operator DevicesRequest(DeviceUpdateSurcharges value) => DeviceUpdateSurcharges(value);

    public TResult Match<TResult>(Func<DeviceActivate, TResult> onDeviceActivate,
        Func<DeviceCancel, TResult> onDeviceCancel,
        Func<DeviceDeactivate, TResult> onDeviceDeactivate,
        Func<DeviceUpdateIdleFileImageAndMessage, TResult> onDeviceUpdateIdleFileImageAndMessage,
        Func<DeviceUpdateSurcharges, TResult> onDeviceUpdateSurcharges,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDeviceActivate(out var deviceActivateValue) => onDeviceActivate(deviceActivateValue),
            _ when TryGetDeviceCancel(out var deviceCancelValue) => onDeviceCancel(deviceCancelValue),
            _ when TryGetDeviceDeactivate(out var deviceDeactivateValue) => onDeviceDeactivate(deviceDeactivateValue),
            _ when TryGetDeviceUpdateIdleFileImageAndMessage(
                out var deviceUpdateIdleFileImageAndMessageValue) => onDeviceUpdateIdleFileImageAndMessage(
                deviceUpdateIdleFileImageAndMessageValue),
            _ when TryGetDeviceUpdateSurcharges(out var deviceUpdateSurchargesValue) => onDeviceUpdateSurcharges(
                deviceUpdateSurchargesValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DevicesRequest)} holds no value.")
        };

    public void Match(Action<DeviceActivate> onDeviceActivate,
        Action<DeviceCancel> onDeviceCancel,
        Action<DeviceDeactivate> onDeviceDeactivate,
        Action<DeviceUpdateIdleFileImageAndMessage> onDeviceUpdateIdleFileImageAndMessage,
        Action<DeviceUpdateSurcharges> onDeviceUpdateSurcharges,
        Action<JsonElement> otherwise)
    {
        if (TryGetDeviceActivate(out var deviceActivateValue)) onDeviceActivate(deviceActivateValue);
        else if (TryGetDeviceCancel(out var deviceCancelValue)) onDeviceCancel(deviceCancelValue);
        else if (TryGetDeviceDeactivate(out var deviceDeactivateValue)) onDeviceDeactivate(deviceDeactivateValue);
        else if (TryGetDeviceUpdateIdleFileImageAndMessage(
            out var deviceUpdateIdleFileImageAndMessageValue)) onDeviceUpdateIdleFileImageAndMessage(
            deviceUpdateIdleFileImageAndMessageValue);
        else if (TryGetDeviceUpdateSurcharges(out var deviceUpdateSurchargesValue)) onDeviceUpdateSurcharges(
            deviceUpdateSurchargesValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DevicesRequest)} holds no value.");
    }
}

file sealed class DevicesRequestConverter : JsonConverter<DevicesRequest>
{
    public override DevicesRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DeviceActivate>(root, options, out var deviceActivateValue))
        {
            return DevicesRequest.DeviceActivate(deviceActivateValue);
        }
        if (JsonSerializer.TryDeserialize<DeviceCancel>(root, options, out var deviceCancelValue))
        {
            return DevicesRequest.DeviceCancel(deviceCancelValue);
        }
        if (JsonSerializer.TryDeserialize<DeviceDeactivate>(root, options, out var deviceDeactivateValue))
        {
            return DevicesRequest.DeviceDeactivate(deviceDeactivateValue);
        }
        if (JsonSerializer.TryDeserialize<DeviceUpdateIdleFileImageAndMessage>(
            root,
            options,
            out var deviceUpdateIdleFileImageAndMessageValue))
        {
            return DevicesRequest.DeviceUpdateIdleFileImageAndMessage(deviceUpdateIdleFileImageAndMessageValue);
        }
        if (JsonSerializer.TryDeserialize<DeviceUpdateSurcharges>(root, options, out var deviceUpdateSurchargesValue))
        {
            return DevicesRequest.DeviceUpdateSurcharges(deviceUpdateSurchargesValue);
        }
        return DevicesRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DevicesRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetDeviceActivate(out var deviceActivateValue))
        {
            JsonSerializer.Serialize(writer, deviceActivateValue, options);
        }
        else if (value.TryGetDeviceCancel(out var deviceCancelValue))
        {
            JsonSerializer.Serialize(writer, deviceCancelValue, options);
        }
        else if (value.TryGetDeviceDeactivate(out var deviceDeactivateValue))
        {
            JsonSerializer.Serialize(writer, deviceDeactivateValue, options);
        }
        else if (value.TryGetDeviceUpdateIdleFileImageAndMessage(out var deviceUpdateIdleFileImageAndMessageValue))
        {
            JsonSerializer.Serialize(writer, deviceUpdateIdleFileImageAndMessageValue, options);
        }
        else if (value.TryGetDeviceUpdateSurcharges(out var deviceUpdateSurchargesValue))
        {
            JsonSerializer.Serialize(writer, deviceUpdateSurchargesValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(DevicesRequest)} contains no valid value to serialize.");
        }
    }
}
