using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Extensions;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models.AnyOf;

/// <summary>
/// Message to the bot.
/// </summary>
[JsonConverter(typeof(Message1Converter))]
public record Message1
{
    private readonly Optional<ChoiceMessage> _choiceMessageValue;

    private readonly Optional<TextMessage> _textMessageValue;

    private readonly Optional<TransferSucceededRequestMessage> _transferSucceededRequestMessageValue;

    private readonly Optional<TransferFailedRequestMessage> _transferFailedRequestMessageValue;

    private readonly Optional<RedirectMessage> _redirectMessageValue;

    private readonly Optional<SetVariablesMessage> _setVariablesMessageValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Message1(Optional<ChoiceMessage> choiceMessageValue,
        Optional<TextMessage> textMessageValue,
        Optional<TransferSucceededRequestMessage> transferSucceededRequestMessageValue,
        Optional<TransferFailedRequestMessage> transferFailedRequestMessageValue,
        Optional<RedirectMessage> redirectMessageValue,
        Optional<SetVariablesMessage> setVariablesMessageValue,
        Optional<UnknownArm> unknownValue)
    {
        _choiceMessageValue = choiceMessageValue;
        _textMessageValue = textMessageValue;
        _transferSucceededRequestMessageValue = transferSucceededRequestMessageValue;
        _transferFailedRequestMessageValue = transferFailedRequestMessageValue;
        _redirectMessageValue = redirectMessageValue;
        _setVariablesMessageValue = setVariablesMessageValue;
        _unknownValue = unknownValue;
    }

    public static Message1 ChoiceMessage(ChoiceMessage value) =>
        new(Optional<ChoiceMessage>.Some(value), default, default, default, default, default, default);

    public static Message1 TextMessage(TextMessage value) =>
        new(default, Optional<TextMessage>.Some(value), default, default, default, default, default);

    public static Message1 TransferSucceededRequestMessage(TransferSucceededRequestMessage value) =>
        new(
            default,
            default,
            Optional<TransferSucceededRequestMessage>.Some(value),
            default,
            default,
            default,
            default);

    public static Message1 TransferFailedRequestMessage(TransferFailedRequestMessage value) =>
        new(default, default, default, Optional<TransferFailedRequestMessage>.Some(value), default, default, default);

    public static Message1 RedirectMessage(RedirectMessage value) =>
        new(default, default, default, default, Optional<RedirectMessage>.Some(value), default, default);

    public static Message1 SetVariablesMessage(SetVariablesMessage value) =>
        new(default, default, default, default, default, Optional<SetVariablesMessage>.Some(value), default);

    internal static Message1 Unknown(JsonElement value) =>
        new(default, default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetChoiceMessage([NotNullWhen(true)] out ChoiceMessage? value) =>
        _choiceMessageValue.TryGetValue(out value);

    public bool TryGetTextMessage([NotNullWhen(true)] out TextMessage? value) =>
        _textMessageValue.TryGetValue(out value);

    public bool TryGetTransferSucceededRequestMessage([NotNullWhen(true)] out TransferSucceededRequestMessage? value) =>
        _transferSucceededRequestMessageValue.TryGetValue(out value);

    public bool TryGetTransferFailedRequestMessage([NotNullWhen(true)] out TransferFailedRequestMessage? value) =>
        _transferFailedRequestMessageValue.TryGetValue(out value);

    public bool TryGetRedirectMessage([NotNullWhen(true)] out RedirectMessage? value) =>
        _redirectMessageValue.TryGetValue(out value);

    public bool TryGetSetVariablesMessage([NotNullWhen(true)] out SetVariablesMessage? value) =>
        _setVariablesMessageValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Message1(ChoiceMessage value) => ChoiceMessage(value);

    public static implicit operator Message1(TextMessage value) => TextMessage(value);

    public static implicit operator Message1(TransferSucceededRequestMessage value) =>
        TransferSucceededRequestMessage(value);

    public static implicit operator Message1(TransferFailedRequestMessage value) => TransferFailedRequestMessage(value);

    public static implicit operator Message1(RedirectMessage value) => RedirectMessage(value);

    public static implicit operator Message1(SetVariablesMessage value) => SetVariablesMessage(value);

    public TResult Match<TResult>(Func<ChoiceMessage, TResult> onChoiceMessage,
        Func<TextMessage, TResult> onTextMessage,
        Func<TransferSucceededRequestMessage, TResult> onTransferSucceededRequestMessage,
        Func<TransferFailedRequestMessage, TResult> onTransferFailedRequestMessage,
        Func<RedirectMessage, TResult> onRedirectMessage,
        Func<SetVariablesMessage, TResult> onSetVariablesMessage,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetChoiceMessage(out var choiceMessageValue) => onChoiceMessage(choiceMessageValue),
            _ when TryGetTextMessage(out var textMessageValue) => onTextMessage(textMessageValue),
            _ when TryGetTransferSucceededRequestMessage(
                out var transferSucceededRequestMessageValue) => onTransferSucceededRequestMessage(
                transferSucceededRequestMessageValue),
            _ when TryGetTransferFailedRequestMessage(
                out var transferFailedRequestMessageValue) => onTransferFailedRequestMessage(
                transferFailedRequestMessageValue),
            _ when TryGetRedirectMessage(out var redirectMessageValue) => onRedirectMessage(redirectMessageValue),
            _ when TryGetSetVariablesMessage(out var setVariablesMessageValue) => onSetVariablesMessage(
                setVariablesMessageValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Message1)} holds no value.")
        };

    public void Match(Action<ChoiceMessage> onChoiceMessage,
        Action<TextMessage> onTextMessage,
        Action<TransferSucceededRequestMessage> onTransferSucceededRequestMessage,
        Action<TransferFailedRequestMessage> onTransferFailedRequestMessage,
        Action<RedirectMessage> onRedirectMessage,
        Action<SetVariablesMessage> onSetVariablesMessage,
        Action<JsonElement> otherwise)
    {
        if (TryGetChoiceMessage(out var choiceMessageValue)) onChoiceMessage(choiceMessageValue);
        else if (TryGetTextMessage(out var textMessageValue)) onTextMessage(textMessageValue);
        else if (TryGetTransferSucceededRequestMessage(
            out var transferSucceededRequestMessageValue)) onTransferSucceededRequestMessage(
            transferSucceededRequestMessageValue);
        else if (TryGetTransferFailedRequestMessage(
            out var transferFailedRequestMessageValue)) onTransferFailedRequestMessage(
            transferFailedRequestMessageValue);
        else if (TryGetRedirectMessage(out var redirectMessageValue)) onRedirectMessage(redirectMessageValue);
        else if (TryGetSetVariablesMessage(out var setVariablesMessageValue)) onSetVariablesMessage(
            setVariablesMessageValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Message1)} holds no value.");
    }
}

file sealed class Message1Converter : JsonConverter<Message1>
{
    public override Message1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ChoiceMessage>(root, options, out var choiceMessageValue))
        {
            return Message1.ChoiceMessage(choiceMessageValue);
        }
        if (JsonSerializer.TryDeserialize<TextMessage>(root, options, out var textMessageValue))
        {
            return Message1.TextMessage(textMessageValue);
        }
        if (JsonSerializer.TryDeserialize<TransferSucceededRequestMessage>(
            root,
            options,
            out var transferSucceededRequestMessageValue))
        {
            return Message1.TransferSucceededRequestMessage(transferSucceededRequestMessageValue);
        }
        if (JsonSerializer.TryDeserialize<TransferFailedRequestMessage>(
            root,
            options,
            out var transferFailedRequestMessageValue))
        {
            return Message1.TransferFailedRequestMessage(transferFailedRequestMessageValue);
        }
        if (JsonSerializer.TryDeserialize<RedirectMessage>(root, options, out var redirectMessageValue))
        {
            return Message1.RedirectMessage(redirectMessageValue);
        }
        if (JsonSerializer.TryDeserialize<SetVariablesMessage>(root, options, out var setVariablesMessageValue))
        {
            return Message1.SetVariablesMessage(setVariablesMessageValue);
        }
        return Message1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Message1 value, JsonSerializerOptions options)
    {
        if (value.TryGetChoiceMessage(out var choiceMessageValue))
        {
            JsonSerializer.Serialize(writer, choiceMessageValue, options);
        }
        else if (value.TryGetTextMessage(out var textMessageValue))
        {
            JsonSerializer.Serialize(writer, textMessageValue, options);
        }
        else if (value.TryGetTransferSucceededRequestMessage(out var transferSucceededRequestMessageValue))
        {
            JsonSerializer.Serialize(writer, transferSucceededRequestMessageValue, options);
        }
        else if (value.TryGetTransferFailedRequestMessage(out var transferFailedRequestMessageValue))
        {
            JsonSerializer.Serialize(writer, transferFailedRequestMessageValue, options);
        }
        else if (value.TryGetRedirectMessage(out var redirectMessageValue))
        {
            JsonSerializer.Serialize(writer, redirectMessageValue, options);
        }
        else if (value.TryGetSetVariablesMessage(out var setVariablesMessageValue))
        {
            JsonSerializer.Serialize(writer, setVariablesMessageValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Message1)} contains no valid value to serialize.");
        }
    }
}
