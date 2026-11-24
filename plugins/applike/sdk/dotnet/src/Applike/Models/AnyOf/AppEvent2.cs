using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Applike.Core.Extensions;
using Applike.Core.Models;

namespace Applike.Models.AnyOf;

[JsonConverter(typeof(AppEvent2Converter))]
public record AppEvent2
{
    private readonly Optional<AppEvent> _appEventValue;

    private readonly Optional<AppEvent1> _appEvent1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private AppEvent2(Optional<AppEvent> appEventValue,
        Optional<AppEvent1> appEvent1Value,
        Optional<UnknownArm> unknownValue)
    {
        _appEventValue = appEventValue;
        _appEvent1Value = appEvent1Value;
        _unknownValue = unknownValue;
    }

    public static AppEvent2 AppEvent(AppEvent value) => new(Optional<AppEvent>.Some(value), default, default);

    public static AppEvent2 AppEvent1(AppEvent1 value) => new(default, Optional<AppEvent1>.Some(value), default);

    internal static AppEvent2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAppEvent([NotNullWhen(true)] out AppEvent? value) => _appEventValue.TryGetValue(out value);

    public bool TryGetAppEvent1([NotNullWhen(true)] out AppEvent1? value) => _appEvent1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AppEvent2(AppEvent value) => AppEvent(value);

    public static implicit operator AppEvent2(AppEvent1 value) => AppEvent1(value);

    public TResult Match<TResult>(Func<AppEvent, TResult> onAppEvent,
        Func<AppEvent1, TResult> onAppEvent1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAppEvent(out var appEventValue) => onAppEvent(appEventValue),
            _ when TryGetAppEvent1(out var appEvent1Value) => onAppEvent1(appEvent1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AppEvent2)} holds no value.")
        };

    public void Match(Action<AppEvent> onAppEvent, Action<AppEvent1> onAppEvent1, Action<JsonElement> otherwise)
    {
        if (TryGetAppEvent(out var appEventValue)) onAppEvent(appEventValue);
        else if (TryGetAppEvent1(out var appEvent1Value)) onAppEvent1(appEvent1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AppEvent2)} holds no value.");
    }
}

file sealed class AppEvent2Converter : JsonConverter<AppEvent2>
{
    public override AppEvent2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AppEvent>(root, options, out var appEventValue))
        {
            return AppEvent2.AppEvent(appEventValue);
        }
        if (JsonSerializer.TryDeserialize<AppEvent1>(root, options, out var appEvent1Value))
        {
            return AppEvent2.AppEvent1(appEvent1Value);
        }
        return AppEvent2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AppEvent2 value, JsonSerializerOptions options)
    {
        if (value.TryGetAppEvent(out var appEventValue))
        {
            JsonSerializer.Serialize(writer, appEventValue, options);
        }
        else if (value.TryGetAppEvent1(out var appEvent1Value))
        {
            JsonSerializer.Serialize(writer, appEvent1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AppEvent2)} contains no valid value to serialize.");
        }
    }
}
