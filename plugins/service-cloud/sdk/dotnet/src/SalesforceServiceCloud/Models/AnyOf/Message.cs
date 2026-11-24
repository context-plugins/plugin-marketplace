using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Extensions;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models.AnyOf;

[JsonConverter(typeof(MessageConverter))]
public record Message
{
    private readonly Optional<TextResponseMessage> _textResponseMessageValue;

    private readonly Optional<ChoicesResponseMessage> _choicesResponseMessageValue;

    private readonly Optional<EscalateResponseMessage> _escalateResponseMessageValue;

    private readonly Optional<SessionEndedResponseMessage> _sessionEndedResponseMessageValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Message(Optional<TextResponseMessage> textResponseMessageValue,
        Optional<ChoicesResponseMessage> choicesResponseMessageValue,
        Optional<EscalateResponseMessage> escalateResponseMessageValue,
        Optional<SessionEndedResponseMessage> sessionEndedResponseMessageValue,
        Optional<UnknownArm> unknownValue)
    {
        _textResponseMessageValue = textResponseMessageValue;
        _choicesResponseMessageValue = choicesResponseMessageValue;
        _escalateResponseMessageValue = escalateResponseMessageValue;
        _sessionEndedResponseMessageValue = sessionEndedResponseMessageValue;
        _unknownValue = unknownValue;
    }

    public static Message TextResponseMessage(TextResponseMessage value) =>
        new(Optional<TextResponseMessage>.Some(value), default, default, default, default);

    public static Message ChoicesResponseMessage(ChoicesResponseMessage value) =>
        new(default, Optional<ChoicesResponseMessage>.Some(value), default, default, default);

    public static Message EscalateResponseMessage(EscalateResponseMessage value) =>
        new(default, default, Optional<EscalateResponseMessage>.Some(value), default, default);

    public static Message SessionEndedResponseMessage(SessionEndedResponseMessage value) =>
        new(default, default, default, Optional<SessionEndedResponseMessage>.Some(value), default);

    internal static Message Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTextResponseMessage([NotNullWhen(true)] out TextResponseMessage? value) =>
        _textResponseMessageValue.TryGetValue(out value);

    public bool TryGetChoicesResponseMessage([NotNullWhen(true)] out ChoicesResponseMessage? value) =>
        _choicesResponseMessageValue.TryGetValue(out value);

    public bool TryGetEscalateResponseMessage([NotNullWhen(true)] out EscalateResponseMessage? value) =>
        _escalateResponseMessageValue.TryGetValue(out value);

    public bool TryGetSessionEndedResponseMessage([NotNullWhen(true)] out SessionEndedResponseMessage? value) =>
        _sessionEndedResponseMessageValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Message(TextResponseMessage value) => TextResponseMessage(value);

    public static implicit operator Message(ChoicesResponseMessage value) => ChoicesResponseMessage(value);

    public static implicit operator Message(EscalateResponseMessage value) => EscalateResponseMessage(value);

    public static implicit operator Message(SessionEndedResponseMessage value) => SessionEndedResponseMessage(value);

    public TResult Match<TResult>(Func<TextResponseMessage, TResult> onTextResponseMessage,
        Func<ChoicesResponseMessage, TResult> onChoicesResponseMessage,
        Func<EscalateResponseMessage, TResult> onEscalateResponseMessage,
        Func<SessionEndedResponseMessage, TResult> onSessionEndedResponseMessage,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTextResponseMessage(out var textResponseMessageValue) => onTextResponseMessage(
                textResponseMessageValue),
            _ when TryGetChoicesResponseMessage(out var choicesResponseMessageValue) => onChoicesResponseMessage(
                choicesResponseMessageValue),
            _ when TryGetEscalateResponseMessage(out var escalateResponseMessageValue) => onEscalateResponseMessage(
                escalateResponseMessageValue),
            _ when TryGetSessionEndedResponseMessage(
                out var sessionEndedResponseMessageValue) => onSessionEndedResponseMessage(
                sessionEndedResponseMessageValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Message)} holds no value.")
        };

    public void Match(Action<TextResponseMessage> onTextResponseMessage,
        Action<ChoicesResponseMessage> onChoicesResponseMessage,
        Action<EscalateResponseMessage> onEscalateResponseMessage,
        Action<SessionEndedResponseMessage> onSessionEndedResponseMessage,
        Action<JsonElement> otherwise)
    {
        if (TryGetTextResponseMessage(out var textResponseMessageValue)) onTextResponseMessage(
            textResponseMessageValue);
        else if (TryGetChoicesResponseMessage(out var choicesResponseMessageValue)) onChoicesResponseMessage(
            choicesResponseMessageValue);
        else if (TryGetEscalateResponseMessage(out var escalateResponseMessageValue)) onEscalateResponseMessage(
            escalateResponseMessageValue);
        else if (TryGetSessionEndedResponseMessage(
            out var sessionEndedResponseMessageValue)) onSessionEndedResponseMessage(sessionEndedResponseMessageValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Message)} holds no value.");
    }
}

file sealed class MessageConverter : JsonConverter<Message>
{
    public override Message Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TextResponseMessage>(root, options, out var textResponseMessageValue))
        {
            return Message.TextResponseMessage(textResponseMessageValue);
        }
        if (JsonSerializer.TryDeserialize<ChoicesResponseMessage>(root, options, out var choicesResponseMessageValue))
        {
            return Message.ChoicesResponseMessage(choicesResponseMessageValue);
        }
        if (JsonSerializer.TryDeserialize<EscalateResponseMessage>(root, options, out var escalateResponseMessageValue))
        {
            return Message.EscalateResponseMessage(escalateResponseMessageValue);
        }
        if (JsonSerializer.TryDeserialize<SessionEndedResponseMessage>(
            root,
            options,
            out var sessionEndedResponseMessageValue))
        {
            return Message.SessionEndedResponseMessage(sessionEndedResponseMessageValue);
        }
        return Message.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Message value, JsonSerializerOptions options)
    {
        if (value.TryGetTextResponseMessage(out var textResponseMessageValue))
        {
            JsonSerializer.Serialize(writer, textResponseMessageValue, options);
        }
        else if (value.TryGetChoicesResponseMessage(out var choicesResponseMessageValue))
        {
            JsonSerializer.Serialize(writer, choicesResponseMessageValue, options);
        }
        else if (value.TryGetEscalateResponseMessage(out var escalateResponseMessageValue))
        {
            JsonSerializer.Serialize(writer, escalateResponseMessageValue, options);
        }
        else if (value.TryGetSessionEndedResponseMessage(out var sessionEndedResponseMessageValue))
        {
            JsonSerializer.Serialize(writer, sessionEndedResponseMessageValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Message)} contains no valid value to serialize.");
        }
    }
}
