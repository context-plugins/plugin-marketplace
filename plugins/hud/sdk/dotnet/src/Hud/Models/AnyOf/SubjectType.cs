using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(SubjectTypeConverter))]
public record SubjectType
{
    private readonly Optional<CheckSubjectType> _checkSubjectTypeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubjectType(Optional<CheckSubjectType> checkSubjectTypeValue, Optional<UnknownArm> unknownValue)
    {
        _checkSubjectTypeValue = checkSubjectTypeValue;
        _unknownValue = unknownValue;
    }

    public static SubjectType CheckSubjectType(CheckSubjectType value) =>
        new(Optional<CheckSubjectType>.Some(value), default);

    internal static SubjectType Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCheckSubjectType([NotNullWhen(true)] out CheckSubjectType? value) =>
        _checkSubjectTypeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SubjectType(CheckSubjectType value) => CheckSubjectType(value);

    public TResult Match<TResult>(Func<CheckSubjectType, TResult> onCheckSubjectType,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCheckSubjectType(out var checkSubjectTypeValue) => onCheckSubjectType(checkSubjectTypeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubjectType)} holds no value.")
        };

    public void Match(Action<CheckSubjectType> onCheckSubjectType, Action<JsonElement> otherwise)
    {
        if (TryGetCheckSubjectType(out var checkSubjectTypeValue)) onCheckSubjectType(checkSubjectTypeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubjectType)} holds no value.");
    }
}

file sealed class SubjectTypeConverter : JsonConverter<SubjectType>
{
    public override SubjectType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CheckSubjectType>(root, options, out var checkSubjectTypeValue))
        {
            return SubjectType.CheckSubjectType(checkSubjectTypeValue);
        }
        return SubjectType.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubjectType value, JsonSerializerOptions options)
    {
        if (value.TryGetCheckSubjectType(out var checkSubjectTypeValue))
        {
            JsonSerializer.Serialize(writer, checkSubjectTypeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubjectType)} contains no valid value to serialize.");
        }
    }
}
