using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(FilterbyConverter))]
public record Filterby
{
    private readonly Optional<BrowserSessionStatus> _browserSessionStatusValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Filterby(Optional<BrowserSessionStatus> browserSessionStatusValue, Optional<UnknownArm> unknownValue)
    {
        _browserSessionStatusValue = browserSessionStatusValue;
        _unknownValue = unknownValue;
    }

    public static Filterby BrowserSessionStatus(BrowserSessionStatus value) =>
        new(Optional<BrowserSessionStatus>.Some(value), default);

    internal static Filterby Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBrowserSessionStatus([NotNullWhen(true)] out BrowserSessionStatus? value) =>
        _browserSessionStatusValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Filterby(BrowserSessionStatus value) => BrowserSessionStatus(value);

    public TResult Match<TResult>(Func<BrowserSessionStatus, TResult> onBrowserSessionStatus,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBrowserSessionStatus(out var browserSessionStatusValue) => onBrowserSessionStatus(
                browserSessionStatusValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Filterby)} holds no value.")
        };

    public void Match(Action<BrowserSessionStatus> onBrowserSessionStatus, Action<JsonElement> otherwise)
    {
        if (TryGetBrowserSessionStatus(out var browserSessionStatusValue)) onBrowserSessionStatus(
            browserSessionStatusValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Filterby)} holds no value.");
    }
}

file sealed class FilterbyConverter : JsonConverter<Filterby>
{
    public override Filterby Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<BrowserSessionStatus>(root, options, out var browserSessionStatusValue))
        {
            return Filterby.BrowserSessionStatus(browserSessionStatusValue);
        }
        return Filterby.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Filterby value, JsonSerializerOptions options)
    {
        if (value.TryGetBrowserSessionStatus(out var browserSessionStatusValue))
        {
            JsonSerializer.Serialize(writer, browserSessionStatusValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Filterby)} contains no valid value to serialize.");
        }
    }
}
