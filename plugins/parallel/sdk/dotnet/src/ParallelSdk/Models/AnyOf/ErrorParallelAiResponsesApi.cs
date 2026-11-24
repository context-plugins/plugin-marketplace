using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(ErrorParallelAiResponsesApiConverter))]
public record ErrorParallelAiResponsesApi
{
    private readonly Optional<ResponseError> _responseErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ErrorParallelAiResponsesApi(Optional<ResponseError> responseErrorValue, Optional<UnknownArm> unknownValue)
    {
        _responseErrorValue = responseErrorValue;
        _unknownValue = unknownValue;
    }

    public static ErrorParallelAiResponsesApi ResponseError(ResponseError value) =>
        new(Optional<ResponseError>.Some(value), default);

    internal static ErrorParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseError([NotNullWhen(true)] out ResponseError? value) =>
        _responseErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ErrorParallelAiResponsesApi(ResponseError value) => ResponseError(value);

    public TResult Match<TResult>(Func<ResponseError, TResult> onResponseError, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseError(out var responseErrorValue) => onResponseError(responseErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ErrorParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<ResponseError> onResponseError, Action<JsonElement> otherwise)
    {
        if (TryGetResponseError(out var responseErrorValue)) onResponseError(responseErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ErrorParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class ErrorParallelAiResponsesApiConverter : JsonConverter<ErrorParallelAiResponsesApi>
{
    public override ErrorParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseError>(root, options, out var responseErrorValue))
        {
            return ErrorParallelAiResponsesApi.ResponseError(responseErrorValue);
        }
        return ErrorParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ErrorParallelAiResponsesApi value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseError(out var responseErrorValue))
        {
            JsonSerializer.Serialize(writer, responseErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ErrorParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
