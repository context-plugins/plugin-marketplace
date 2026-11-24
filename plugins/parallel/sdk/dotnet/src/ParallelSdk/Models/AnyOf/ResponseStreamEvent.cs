using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// An event in the Responses API SSE stream; <c>type</c> identifies the event.
/// </summary>
[JsonConverter(typeof(ResponseStreamEventConverter))]
public record ResponseStreamEvent
{
    private readonly Optional<ResponseCreatedEvent> _responseCreatedEventValue;

    private readonly Optional<ResponseInProgressEvent> _responseInProgressEventValue;

    private readonly Optional<ResponseOutputItemAddedEvent> _responseOutputItemAddedEventValue;

    private readonly Optional<ResponseContentPartAddedEvent> _responseContentPartAddedEventValue;

    private readonly Optional<ResponseTextDeltaEvent> _responseTextDeltaEventValue;

    private readonly Optional<ResponseTextDoneEvent> _responseTextDoneEventValue;

    private readonly Optional<ResponseOutputTextAnnotationAddedEvent> _responseOutputTextAnnotationAddedEventValue;

    private readonly Optional<ResponseContentPartDoneEvent> _responseContentPartDoneEventValue;

    private readonly Optional<ResponseOutputItemDoneEvent> _responseOutputItemDoneEventValue;

    private readonly Optional<ResponseCompletedEvent> _responseCompletedEventValue;

    private readonly Optional<ResponseFailedEvent> _responseFailedEventValue;

    private readonly Optional<ResponseIncompleteEvent> _responseIncompleteEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResponseStreamEvent(Optional<ResponseCreatedEvent> responseCreatedEventValue,
        Optional<ResponseInProgressEvent> responseInProgressEventValue,
        Optional<ResponseOutputItemAddedEvent> responseOutputItemAddedEventValue,
        Optional<ResponseContentPartAddedEvent> responseContentPartAddedEventValue,
        Optional<ResponseTextDeltaEvent> responseTextDeltaEventValue,
        Optional<ResponseTextDoneEvent> responseTextDoneEventValue,
        Optional<ResponseOutputTextAnnotationAddedEvent> responseOutputTextAnnotationAddedEventValue,
        Optional<ResponseContentPartDoneEvent> responseContentPartDoneEventValue,
        Optional<ResponseOutputItemDoneEvent> responseOutputItemDoneEventValue,
        Optional<ResponseCompletedEvent> responseCompletedEventValue,
        Optional<ResponseFailedEvent> responseFailedEventValue,
        Optional<ResponseIncompleteEvent> responseIncompleteEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _responseCreatedEventValue = responseCreatedEventValue;
        _responseInProgressEventValue = responseInProgressEventValue;
        _responseOutputItemAddedEventValue = responseOutputItemAddedEventValue;
        _responseContentPartAddedEventValue = responseContentPartAddedEventValue;
        _responseTextDeltaEventValue = responseTextDeltaEventValue;
        _responseTextDoneEventValue = responseTextDoneEventValue;
        _responseOutputTextAnnotationAddedEventValue = responseOutputTextAnnotationAddedEventValue;
        _responseContentPartDoneEventValue = responseContentPartDoneEventValue;
        _responseOutputItemDoneEventValue = responseOutputItemDoneEventValue;
        _responseCompletedEventValue = responseCompletedEventValue;
        _responseFailedEventValue = responseFailedEventValue;
        _responseIncompleteEventValue = responseIncompleteEventValue;
        _unknownValue = unknownValue;
    }

    public static ResponseStreamEvent ResponseCreatedEvent(ResponseCreatedEvent value) =>
        new(
            Optional<ResponseCreatedEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseInProgressEvent(ResponseInProgressEvent value) =>
        new(
            default,
            Optional<ResponseInProgressEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseOutputItemAddedEvent(ResponseOutputItemAddedEvent value) =>
        new(
            default,
            default,
            Optional<ResponseOutputItemAddedEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseContentPartAddedEvent(ResponseContentPartAddedEvent value) =>
        new(
            default,
            default,
            default,
            Optional<ResponseContentPartAddedEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseTextDeltaEvent(ResponseTextDeltaEvent value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ResponseTextDeltaEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseTextDoneEvent(ResponseTextDoneEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseTextDoneEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseOutputTextAnnotationAddedEvent(ResponseOutputTextAnnotationAddedEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseOutputTextAnnotationAddedEvent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseContentPartDoneEvent(ResponseContentPartDoneEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseContentPartDoneEvent>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseOutputItemDoneEvent(ResponseOutputItemDoneEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseOutputItemDoneEvent>.Some(value),
            default,
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseCompletedEvent(ResponseCompletedEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseCompletedEvent>.Some(value),
            default,
            default,
            default);

    public static ResponseStreamEvent ResponseFailedEvent(ResponseFailedEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseFailedEvent>.Some(value),
            default,
            default);

    public static ResponseStreamEvent ResponseIncompleteEvent(ResponseIncompleteEvent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ResponseIncompleteEvent>.Some(value),
            default);

    internal static ResponseStreamEvent Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseCreatedEvent([NotNullWhen(true)] out ResponseCreatedEvent? value) =>
        _responseCreatedEventValue.TryGetValue(out value);

    public bool TryGetResponseInProgressEvent([NotNullWhen(true)] out ResponseInProgressEvent? value) =>
        _responseInProgressEventValue.TryGetValue(out value);

    public bool TryGetResponseOutputItemAddedEvent([NotNullWhen(true)] out ResponseOutputItemAddedEvent? value) =>
        _responseOutputItemAddedEventValue.TryGetValue(out value);

    public bool TryGetResponseContentPartAddedEvent([NotNullWhen(true)] out ResponseContentPartAddedEvent? value) =>
        _responseContentPartAddedEventValue.TryGetValue(out value);

    public bool TryGetResponseTextDeltaEvent([NotNullWhen(true)] out ResponseTextDeltaEvent? value) =>
        _responseTextDeltaEventValue.TryGetValue(out value);

    public bool TryGetResponseTextDoneEvent([NotNullWhen(true)] out ResponseTextDoneEvent? value) =>
        _responseTextDoneEventValue.TryGetValue(out value);

    public bool TryGetResponseOutputTextAnnotationAddedEvent([NotNullWhen(true)] out ResponseOutputTextAnnotationAddedEvent? value) =>
        _responseOutputTextAnnotationAddedEventValue.TryGetValue(out value);

    public bool TryGetResponseContentPartDoneEvent([NotNullWhen(true)] out ResponseContentPartDoneEvent? value) =>
        _responseContentPartDoneEventValue.TryGetValue(out value);

    public bool TryGetResponseOutputItemDoneEvent([NotNullWhen(true)] out ResponseOutputItemDoneEvent? value) =>
        _responseOutputItemDoneEventValue.TryGetValue(out value);

    public bool TryGetResponseCompletedEvent([NotNullWhen(true)] out ResponseCompletedEvent? value) =>
        _responseCompletedEventValue.TryGetValue(out value);

    public bool TryGetResponseFailedEvent([NotNullWhen(true)] out ResponseFailedEvent? value) =>
        _responseFailedEventValue.TryGetValue(out value);

    public bool TryGetResponseIncompleteEvent([NotNullWhen(true)] out ResponseIncompleteEvent? value) =>
        _responseIncompleteEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResponseStreamEvent(ResponseCreatedEvent value) => ResponseCreatedEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseInProgressEvent value) =>
        ResponseInProgressEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseOutputItemAddedEvent value) =>
        ResponseOutputItemAddedEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseContentPartAddedEvent value) =>
        ResponseContentPartAddedEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseTextDeltaEvent value) => ResponseTextDeltaEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseTextDoneEvent value) => ResponseTextDoneEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseOutputTextAnnotationAddedEvent value) =>
        ResponseOutputTextAnnotationAddedEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseContentPartDoneEvent value) =>
        ResponseContentPartDoneEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseOutputItemDoneEvent value) =>
        ResponseOutputItemDoneEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseCompletedEvent value) => ResponseCompletedEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseFailedEvent value) => ResponseFailedEvent(value);

    public static implicit operator ResponseStreamEvent(ResponseIncompleteEvent value) =>
        ResponseIncompleteEvent(value);

    public TResult Match<TResult>(Func<ResponseCreatedEvent, TResult> onResponseCreatedEvent,
        Func<ResponseInProgressEvent, TResult> onResponseInProgressEvent,
        Func<ResponseOutputItemAddedEvent, TResult> onResponseOutputItemAddedEvent,
        Func<ResponseContentPartAddedEvent, TResult> onResponseContentPartAddedEvent,
        Func<ResponseTextDeltaEvent, TResult> onResponseTextDeltaEvent,
        Func<ResponseTextDoneEvent, TResult> onResponseTextDoneEvent,
        Func<ResponseOutputTextAnnotationAddedEvent, TResult> onResponseOutputTextAnnotationAddedEvent,
        Func<ResponseContentPartDoneEvent, TResult> onResponseContentPartDoneEvent,
        Func<ResponseOutputItemDoneEvent, TResult> onResponseOutputItemDoneEvent,
        Func<ResponseCompletedEvent, TResult> onResponseCompletedEvent,
        Func<ResponseFailedEvent, TResult> onResponseFailedEvent,
        Func<ResponseIncompleteEvent, TResult> onResponseIncompleteEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseCreatedEvent(out var responseCreatedEventValue) => onResponseCreatedEvent(
                responseCreatedEventValue),
            _ when TryGetResponseInProgressEvent(out var responseInProgressEventValue) => onResponseInProgressEvent(
                responseInProgressEventValue),
            _ when TryGetResponseOutputItemAddedEvent(
                out var responseOutputItemAddedEventValue) => onResponseOutputItemAddedEvent(
                responseOutputItemAddedEventValue),
            _ when TryGetResponseContentPartAddedEvent(
                out var responseContentPartAddedEventValue) => onResponseContentPartAddedEvent(
                responseContentPartAddedEventValue),
            _ when TryGetResponseTextDeltaEvent(out var responseTextDeltaEventValue) => onResponseTextDeltaEvent(
                responseTextDeltaEventValue),
            _ when TryGetResponseTextDoneEvent(out var responseTextDoneEventValue) => onResponseTextDoneEvent(
                responseTextDoneEventValue),
            _ when TryGetResponseOutputTextAnnotationAddedEvent(
                out var responseOutputTextAnnotationAddedEventValue) => onResponseOutputTextAnnotationAddedEvent(
                responseOutputTextAnnotationAddedEventValue),
            _ when TryGetResponseContentPartDoneEvent(
                out var responseContentPartDoneEventValue) => onResponseContentPartDoneEvent(
                responseContentPartDoneEventValue),
            _ when TryGetResponseOutputItemDoneEvent(
                out var responseOutputItemDoneEventValue) => onResponseOutputItemDoneEvent(
                responseOutputItemDoneEventValue),
            _ when TryGetResponseCompletedEvent(out var responseCompletedEventValue) => onResponseCompletedEvent(
                responseCompletedEventValue),
            _ when TryGetResponseFailedEvent(out var responseFailedEventValue) => onResponseFailedEvent(
                responseFailedEventValue),
            _ when TryGetResponseIncompleteEvent(out var responseIncompleteEventValue) => onResponseIncompleteEvent(
                responseIncompleteEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ResponseStreamEvent)} holds no value.")
        };

    public void Match(Action<ResponseCreatedEvent> onResponseCreatedEvent,
        Action<ResponseInProgressEvent> onResponseInProgressEvent,
        Action<ResponseOutputItemAddedEvent> onResponseOutputItemAddedEvent,
        Action<ResponseContentPartAddedEvent> onResponseContentPartAddedEvent,
        Action<ResponseTextDeltaEvent> onResponseTextDeltaEvent,
        Action<ResponseTextDoneEvent> onResponseTextDoneEvent,
        Action<ResponseOutputTextAnnotationAddedEvent> onResponseOutputTextAnnotationAddedEvent,
        Action<ResponseContentPartDoneEvent> onResponseContentPartDoneEvent,
        Action<ResponseOutputItemDoneEvent> onResponseOutputItemDoneEvent,
        Action<ResponseCompletedEvent> onResponseCompletedEvent,
        Action<ResponseFailedEvent> onResponseFailedEvent,
        Action<ResponseIncompleteEvent> onResponseIncompleteEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetResponseCreatedEvent(out var responseCreatedEventValue)) onResponseCreatedEvent(
            responseCreatedEventValue);
        else if (TryGetResponseInProgressEvent(out var responseInProgressEventValue)) onResponseInProgressEvent(
            responseInProgressEventValue);
        else if (TryGetResponseOutputItemAddedEvent(
            out var responseOutputItemAddedEventValue)) onResponseOutputItemAddedEvent(
            responseOutputItemAddedEventValue);
        else if (TryGetResponseContentPartAddedEvent(
            out var responseContentPartAddedEventValue)) onResponseContentPartAddedEvent(
            responseContentPartAddedEventValue);
        else if (TryGetResponseTextDeltaEvent(out var responseTextDeltaEventValue)) onResponseTextDeltaEvent(
            responseTextDeltaEventValue);
        else if (TryGetResponseTextDoneEvent(out var responseTextDoneEventValue)) onResponseTextDoneEvent(
            responseTextDoneEventValue);
        else if (TryGetResponseOutputTextAnnotationAddedEvent(
            out var responseOutputTextAnnotationAddedEventValue)) onResponseOutputTextAnnotationAddedEvent(
            responseOutputTextAnnotationAddedEventValue);
        else if (TryGetResponseContentPartDoneEvent(
            out var responseContentPartDoneEventValue)) onResponseContentPartDoneEvent(
            responseContentPartDoneEventValue);
        else if (TryGetResponseOutputItemDoneEvent(
            out var responseOutputItemDoneEventValue)) onResponseOutputItemDoneEvent(responseOutputItemDoneEventValue);
        else if (TryGetResponseCompletedEvent(out var responseCompletedEventValue)) onResponseCompletedEvent(
            responseCompletedEventValue);
        else if (TryGetResponseFailedEvent(out var responseFailedEventValue)) onResponseFailedEvent(
            responseFailedEventValue);
        else if (TryGetResponseIncompleteEvent(out var responseIncompleteEventValue)) onResponseIncompleteEvent(
            responseIncompleteEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ResponseStreamEvent)} holds no value.");
    }
}

file sealed class ResponseStreamEventConverter : JsonConverter<ResponseStreamEvent>
{
    public override ResponseStreamEvent Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseCreatedEvent>(root, options, out var responseCreatedEventValue))
        {
            return ResponseStreamEvent.ResponseCreatedEvent(responseCreatedEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseInProgressEvent>(root, options, out var responseInProgressEventValue))
        {
            return ResponseStreamEvent.ResponseInProgressEvent(responseInProgressEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseOutputItemAddedEvent>(
            root,
            options,
            out var responseOutputItemAddedEventValue))
        {
            return ResponseStreamEvent.ResponseOutputItemAddedEvent(responseOutputItemAddedEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseContentPartAddedEvent>(
            root,
            options,
            out var responseContentPartAddedEventValue))
        {
            return ResponseStreamEvent.ResponseContentPartAddedEvent(responseContentPartAddedEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseTextDeltaEvent>(root, options, out var responseTextDeltaEventValue))
        {
            return ResponseStreamEvent.ResponseTextDeltaEvent(responseTextDeltaEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseTextDoneEvent>(root, options, out var responseTextDoneEventValue))
        {
            return ResponseStreamEvent.ResponseTextDoneEvent(responseTextDoneEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseOutputTextAnnotationAddedEvent>(
            root,
            options,
            out var responseOutputTextAnnotationAddedEventValue))
        {
            return ResponseStreamEvent.ResponseOutputTextAnnotationAddedEvent(
                responseOutputTextAnnotationAddedEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseContentPartDoneEvent>(
            root,
            options,
            out var responseContentPartDoneEventValue))
        {
            return ResponseStreamEvent.ResponseContentPartDoneEvent(responseContentPartDoneEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseOutputItemDoneEvent>(
            root,
            options,
            out var responseOutputItemDoneEventValue))
        {
            return ResponseStreamEvent.ResponseOutputItemDoneEvent(responseOutputItemDoneEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseCompletedEvent>(root, options, out var responseCompletedEventValue))
        {
            return ResponseStreamEvent.ResponseCompletedEvent(responseCompletedEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseFailedEvent>(root, options, out var responseFailedEventValue))
        {
            return ResponseStreamEvent.ResponseFailedEvent(responseFailedEventValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseIncompleteEvent>(root, options, out var responseIncompleteEventValue))
        {
            return ResponseStreamEvent.ResponseIncompleteEvent(responseIncompleteEventValue);
        }
        return ResponseStreamEvent.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ResponseStreamEvent value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseCreatedEvent(out var responseCreatedEventValue))
        {
            JsonSerializer.Serialize(writer, responseCreatedEventValue, options);
        }
        else if (value.TryGetResponseInProgressEvent(out var responseInProgressEventValue))
        {
            JsonSerializer.Serialize(writer, responseInProgressEventValue, options);
        }
        else if (value.TryGetResponseOutputItemAddedEvent(out var responseOutputItemAddedEventValue))
        {
            JsonSerializer.Serialize(writer, responseOutputItemAddedEventValue, options);
        }
        else if (value.TryGetResponseContentPartAddedEvent(out var responseContentPartAddedEventValue))
        {
            JsonSerializer.Serialize(writer, responseContentPartAddedEventValue, options);
        }
        else if (value.TryGetResponseTextDeltaEvent(out var responseTextDeltaEventValue))
        {
            JsonSerializer.Serialize(writer, responseTextDeltaEventValue, options);
        }
        else if (value.TryGetResponseTextDoneEvent(out var responseTextDoneEventValue))
        {
            JsonSerializer.Serialize(writer, responseTextDoneEventValue, options);
        }
        else if (value.TryGetResponseOutputTextAnnotationAddedEvent(
            out var responseOutputTextAnnotationAddedEventValue))
        {
            JsonSerializer.Serialize(writer, responseOutputTextAnnotationAddedEventValue, options);
        }
        else if (value.TryGetResponseContentPartDoneEvent(out var responseContentPartDoneEventValue))
        {
            JsonSerializer.Serialize(writer, responseContentPartDoneEventValue, options);
        }
        else if (value.TryGetResponseOutputItemDoneEvent(out var responseOutputItemDoneEventValue))
        {
            JsonSerializer.Serialize(writer, responseOutputItemDoneEventValue, options);
        }
        else if (value.TryGetResponseCompletedEvent(out var responseCompletedEventValue))
        {
            JsonSerializer.Serialize(writer, responseCompletedEventValue, options);
        }
        else if (value.TryGetResponseFailedEvent(out var responseFailedEventValue))
        {
            JsonSerializer.Serialize(writer, responseFailedEventValue, options);
        }
        else if (value.TryGetResponseIncompleteEvent(out var responseIncompleteEventValue))
        {
            JsonSerializer.Serialize(writer, responseIncompleteEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ResponseStreamEvent)} contains no valid value to serialize.");
        }
    }
}
