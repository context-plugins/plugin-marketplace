using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Type1ParallelAiChatApiBetaAndParallelAiExtractApiConverter))]
public record Type1ParallelAiChatApiBetaAndParallelAiExtractApi
{
    private readonly Optional<TypeEnum> _typeEnumValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Type1ParallelAiChatApiBetaAndParallelAiExtractApi(Optional<TypeEnum> typeEnumValue,
        Optional<UnknownArm> unknownValue)
    {
        _typeEnumValue = typeEnumValue;
        _unknownValue = unknownValue;
    }

    public static Type1ParallelAiChatApiBetaAndParallelAiExtractApi TypeEnum(TypeEnum value) =>
        new(Optional<TypeEnum>.Some(value), default);

    internal static Type1ParallelAiChatApiBetaAndParallelAiExtractApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTypeEnum([NotNullWhen(true)] out TypeEnum? value) => _typeEnumValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Type1ParallelAiChatApiBetaAndParallelAiExtractApi(TypeEnum value) =>
        TypeEnum(value);

    public TResult Match<TResult>(Func<TypeEnum, TResult> onTypeEnum, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTypeEnum(out var typeEnumValue) => onTypeEnum(typeEnumValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(Type1ParallelAiChatApiBetaAndParallelAiExtractApi)} holds no value.")
        };

    public void Match(Action<TypeEnum> onTypeEnum, Action<JsonElement> otherwise)
    {
        if (TryGetTypeEnum(out var typeEnumValue)) onTypeEnum(typeEnumValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(Type1ParallelAiChatApiBetaAndParallelAiExtractApi)} holds no value.");
    }
}

file sealed class Type1ParallelAiChatApiBetaAndParallelAiExtractApiConverter : JsonConverter<Type1ParallelAiChatApiBetaAndParallelAiExtractApi>
{
    public override Type1ParallelAiChatApiBetaAndParallelAiExtractApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TypeEnum>(root, options, out var typeEnumValue))
        {
            return Type1ParallelAiChatApiBetaAndParallelAiExtractApi.TypeEnum(typeEnumValue);
        }
        return Type1ParallelAiChatApiBetaAndParallelAiExtractApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        Type1ParallelAiChatApiBetaAndParallelAiExtractApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetTypeEnum(out var typeEnumValue))
        {
            JsonSerializer.Serialize(writer, typeEnumValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(Type1ParallelAiChatApiBetaAndParallelAiExtractApi)} contains no valid value to serialize.");
        }
    }
}
