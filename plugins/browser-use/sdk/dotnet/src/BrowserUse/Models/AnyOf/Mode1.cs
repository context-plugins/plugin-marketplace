using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(Mode1Converter))]
public record Mode1
{
    private readonly Optional<ModeBrowserUsePublicApiV4WalletsApi> _modeBrowserUsePublicApiV4WalletsApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Mode1(Optional<ModeBrowserUsePublicApiV4WalletsApi> modeBrowserUsePublicApiV4WalletsApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _modeBrowserUsePublicApiV4WalletsApiValue = modeBrowserUsePublicApiV4WalletsApiValue;
        _unknownValue = unknownValue;
    }

    public static Mode1 ModeBrowserUsePublicApiV4WalletsApi(ModeBrowserUsePublicApiV4WalletsApi value) =>
        new(Optional<ModeBrowserUsePublicApiV4WalletsApi>.Some(value), default);

    internal static Mode1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModeBrowserUsePublicApiV4WalletsApi([NotNullWhen(true)] out ModeBrowserUsePublicApiV4WalletsApi? value) =>
        _modeBrowserUsePublicApiV4WalletsApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Mode1(ModeBrowserUsePublicApiV4WalletsApi value) =>
        ModeBrowserUsePublicApiV4WalletsApi(value);

    public TResult Match<TResult>(Func<ModeBrowserUsePublicApiV4WalletsApi, TResult> onModeBrowserUsePublicApiV4WalletsApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModeBrowserUsePublicApiV4WalletsApi(
                out var modeBrowserUsePublicApiV4WalletsApiValue) => onModeBrowserUsePublicApiV4WalletsApi(
                modeBrowserUsePublicApiV4WalletsApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Mode1)} holds no value.")
        };

    public void Match(Action<ModeBrowserUsePublicApiV4WalletsApi> onModeBrowserUsePublicApiV4WalletsApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetModeBrowserUsePublicApiV4WalletsApi(
            out var modeBrowserUsePublicApiV4WalletsApiValue)) onModeBrowserUsePublicApiV4WalletsApi(
            modeBrowserUsePublicApiV4WalletsApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Mode1)} holds no value.");
    }
}

file sealed class Mode1Converter : JsonConverter<Mode1>
{
    public override Mode1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModeBrowserUsePublicApiV4WalletsApi>(
            root,
            options,
            out var modeBrowserUsePublicApiV4WalletsApiValue))
        {
            return Mode1.ModeBrowserUsePublicApiV4WalletsApi(modeBrowserUsePublicApiV4WalletsApiValue);
        }
        return Mode1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Mode1 value, JsonSerializerOptions options)
    {
        if (value.TryGetModeBrowserUsePublicApiV4WalletsApi(out var modeBrowserUsePublicApiV4WalletsApiValue))
        {
            JsonSerializer.Serialize(writer, modeBrowserUsePublicApiV4WalletsApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Mode1)} contains no valid value to serialize.");
        }
    }
}
