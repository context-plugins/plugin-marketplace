using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(Reason111Converter))]
public record Reason111
{
    private readonly Optional<Reason1AlphAiRestRadarApi> _reason1AlphAiRestRadarApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Reason111(Optional<Reason1AlphAiRestRadarApi> reason1AlphAiRestRadarApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _reason1AlphAiRestRadarApiValue = reason1AlphAiRestRadarApiValue;
        _unknownValue = unknownValue;
    }

    public static Reason111 Reason1AlphAiRestRadarApi(Reason1AlphAiRestRadarApi value) =>
        new(Optional<Reason1AlphAiRestRadarApi>.Some(value), default);

    internal static Reason111 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReason1AlphAiRestRadarApi([NotNullWhen(true)] out Reason1AlphAiRestRadarApi? value) =>
        _reason1AlphAiRestRadarApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Reason111(Reason1AlphAiRestRadarApi value) => Reason1AlphAiRestRadarApi(value);

    public TResult Match<TResult>(Func<Reason1AlphAiRestRadarApi, TResult> onReason1AlphAiRestRadarApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReason1AlphAiRestRadarApi(
                out var reason1AlphAiRestRadarApiValue) => onReason1AlphAiRestRadarApi(reason1AlphAiRestRadarApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Reason111)} holds no value.")
        };

    public void Match(Action<Reason1AlphAiRestRadarApi> onReason1AlphAiRestRadarApi, Action<JsonElement> otherwise)
    {
        if (TryGetReason1AlphAiRestRadarApi(out var reason1AlphAiRestRadarApiValue)) onReason1AlphAiRestRadarApi(
            reason1AlphAiRestRadarApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Reason111)} holds no value.");
    }
}

file sealed class Reason111Converter : JsonConverter<Reason111>
{
    public override Reason111 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Reason1AlphAiRestRadarApi>(
            root,
            options,
            out var reason1AlphAiRestRadarApiValue))
        {
            return Reason111.Reason1AlphAiRestRadarApi(reason1AlphAiRestRadarApiValue);
        }
        return Reason111.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Reason111 value, JsonSerializerOptions options)
    {
        if (value.TryGetReason1AlphAiRestRadarApi(out var reason1AlphAiRestRadarApiValue))
        {
            JsonSerializer.Serialize(writer, reason1AlphAiRestRadarApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Reason111)} contains no valid value to serialize.");
        }
    }
}
