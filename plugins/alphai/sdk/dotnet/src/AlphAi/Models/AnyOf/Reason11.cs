using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(Reason11Converter))]
public record Reason11
{
    private readonly Optional<ReasonAlphAiRestRadarApi> _reasonAlphAiRestRadarApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Reason11(Optional<ReasonAlphAiRestRadarApi> reasonAlphAiRestRadarApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _reasonAlphAiRestRadarApiValue = reasonAlphAiRestRadarApiValue;
        _unknownValue = unknownValue;
    }

    public static Reason11 ReasonAlphAiRestRadarApi(ReasonAlphAiRestRadarApi value) =>
        new(Optional<ReasonAlphAiRestRadarApi>.Some(value), default);

    internal static Reason11 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReasonAlphAiRestRadarApi([NotNullWhen(true)] out ReasonAlphAiRestRadarApi? value) =>
        _reasonAlphAiRestRadarApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Reason11(ReasonAlphAiRestRadarApi value) => ReasonAlphAiRestRadarApi(value);

    public TResult Match<TResult>(Func<ReasonAlphAiRestRadarApi, TResult> onReasonAlphAiRestRadarApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReasonAlphAiRestRadarApi(out var reasonAlphAiRestRadarApiValue) => onReasonAlphAiRestRadarApi(
                reasonAlphAiRestRadarApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Reason11)} holds no value.")
        };

    public void Match(Action<ReasonAlphAiRestRadarApi> onReasonAlphAiRestRadarApi, Action<JsonElement> otherwise)
    {
        if (TryGetReasonAlphAiRestRadarApi(out var reasonAlphAiRestRadarApiValue)) onReasonAlphAiRestRadarApi(
            reasonAlphAiRestRadarApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Reason11)} holds no value.");
    }
}

file sealed class Reason11Converter : JsonConverter<Reason11>
{
    public override Reason11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ReasonAlphAiRestRadarApi>(
            root,
            options,
            out var reasonAlphAiRestRadarApiValue))
        {
            return Reason11.ReasonAlphAiRestRadarApi(reasonAlphAiRestRadarApiValue);
        }
        return Reason11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Reason11 value, JsonSerializerOptions options)
    {
        if (value.TryGetReasonAlphAiRestRadarApi(out var reasonAlphAiRestRadarApiValue))
        {
            JsonSerializer.Serialize(writer, reasonAlphAiRestRadarApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Reason11)} contains no valid value to serialize.");
        }
    }
}
