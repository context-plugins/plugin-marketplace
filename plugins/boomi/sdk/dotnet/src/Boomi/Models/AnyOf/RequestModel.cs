using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Boomi.Core.Extensions;
using Boomi.Core.Models;

namespace Boomi.Models.AnyOf;

[JsonConverter(typeof(RequestModelConverter))]
public record RequestModel
{
    private readonly Optional<MultiMessageRequest> _multiMessageRequestValue;

    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RequestModel(Optional<MultiMessageRequest> multiMessageRequestValue,
        Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _multiMessageRequestValue = multiMessageRequestValue;
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static RequestModel MultiMessageRequest(MultiMessageRequest value) =>
        new(Optional<MultiMessageRequest>.Some(value), default, default);

    public static RequestModel AnonymousObject(object value) => new(default, Optional<object>.Some(value), default);

    internal static RequestModel Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMultiMessageRequest([NotNullWhen(true)] out MultiMessageRequest? value) =>
        _multiMessageRequestValue.TryGetValue(out value);

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RequestModel(MultiMessageRequest value) => MultiMessageRequest(value);

    public TResult Match<TResult>(Func<MultiMessageRequest, TResult> onMultiMessageRequest,
        Func<object, TResult> onAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMultiMessageRequest(out var multiMessageRequestValue) => onMultiMessageRequest(
                multiMessageRequestValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RequestModel)} holds no value.")
        };

    public void Match(Action<MultiMessageRequest> onMultiMessageRequest,
        Action<object> onAnonymousObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetMultiMessageRequest(out var multiMessageRequestValue)) onMultiMessageRequest(
            multiMessageRequestValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RequestModel)} holds no value.");
    }
}

file sealed class RequestModelConverter : JsonConverter<RequestModel>
{
    public override RequestModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MultiMessageRequest>(root, options, out var multiMessageRequestValue))
        {
            return RequestModel.MultiMessageRequest(multiMessageRequestValue);
        }
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return RequestModel.AnonymousObject(anonymousObjectValue);
        }
        return RequestModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RequestModel value, JsonSerializerOptions options)
    {
        if (value.TryGetMultiMessageRequest(out var multiMessageRequestValue))
        {
            JsonSerializer.Serialize(writer, multiMessageRequestValue, options);
        }
        else if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(RequestModel)} contains no valid value to serialize.");
        }
    }
}
