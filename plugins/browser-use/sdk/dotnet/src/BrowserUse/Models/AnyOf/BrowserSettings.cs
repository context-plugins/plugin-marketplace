using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(BrowserSettingsConverter))]
public record BrowserSettings
{
    private readonly Optional<RunBrowserSettings> _runBrowserSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private BrowserSettings(Optional<RunBrowserSettings> runBrowserSettingsValue, Optional<UnknownArm> unknownValue)
    {
        _runBrowserSettingsValue = runBrowserSettingsValue;
        _unknownValue = unknownValue;
    }

    public static BrowserSettings RunBrowserSettings(RunBrowserSettings value) =>
        new(Optional<RunBrowserSettings>.Some(value), default);

    internal static BrowserSettings Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRunBrowserSettings([NotNullWhen(true)] out RunBrowserSettings? value) =>
        _runBrowserSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator BrowserSettings(RunBrowserSettings value) => RunBrowserSettings(value);

    public TResult Match<TResult>(Func<RunBrowserSettings, TResult> onRunBrowserSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRunBrowserSettings(out var runBrowserSettingsValue) => onRunBrowserSettings(
                runBrowserSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(BrowserSettings)} holds no value.")
        };

    public void Match(Action<RunBrowserSettings> onRunBrowserSettings, Action<JsonElement> otherwise)
    {
        if (TryGetRunBrowserSettings(out var runBrowserSettingsValue)) onRunBrowserSettings(runBrowserSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(BrowserSettings)} holds no value.");
    }
}

file sealed class BrowserSettingsConverter : JsonConverter<BrowserSettings>
{
    public override BrowserSettings Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RunBrowserSettings>(root, options, out var runBrowserSettingsValue))
        {
            return BrowserSettings.RunBrowserSettings(runBrowserSettingsValue);
        }
        return BrowserSettings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, BrowserSettings value, JsonSerializerOptions options)
    {
        if (value.TryGetRunBrowserSettings(out var runBrowserSettingsValue))
        {
            JsonSerializer.Serialize(writer, runBrowserSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(BrowserSettings)} contains no valid value to serialize.");
        }
    }
}
