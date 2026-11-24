using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Model2Converter))]
public record Model2
{
    private readonly Optional<TraceThumbnailModel> _traceThumbnailModelValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Model2(Optional<TraceThumbnailModel> traceThumbnailModelValue, Optional<UnknownArm> unknownValue)
    {
        _traceThumbnailModelValue = traceThumbnailModelValue;
        _unknownValue = unknownValue;
    }

    public static Model2 TraceThumbnailModel(TraceThumbnailModel value) =>
        new(Optional<TraceThumbnailModel>.Some(value), default);

    internal static Model2 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTraceThumbnailModel([NotNullWhen(true)] out TraceThumbnailModel? value) =>
        _traceThumbnailModelValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Model2(TraceThumbnailModel value) => TraceThumbnailModel(value);

    public TResult Match<TResult>(Func<TraceThumbnailModel, TResult> onTraceThumbnailModel,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTraceThumbnailModel(out var traceThumbnailModelValue) => onTraceThumbnailModel(
                traceThumbnailModelValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Model2)} holds no value.")
        };

    public void Match(Action<TraceThumbnailModel> onTraceThumbnailModel, Action<JsonElement> otherwise)
    {
        if (TryGetTraceThumbnailModel(out var traceThumbnailModelValue)) onTraceThumbnailModel(
            traceThumbnailModelValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Model2)} holds no value.");
    }
}

file sealed class Model2Converter : JsonConverter<Model2>
{
    public override Model2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TraceThumbnailModel>(root, options, out var traceThumbnailModelValue))
        {
            return Model2.TraceThumbnailModel(traceThumbnailModelValue);
        }
        return Model2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Model2 value, JsonSerializerOptions options)
    {
        if (value.TryGetTraceThumbnailModel(out var traceThumbnailModelValue))
        {
            JsonSerializer.Serialize(writer, traceThumbnailModelValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Model2)} contains no valid value to serialize.");
        }
    }
}
