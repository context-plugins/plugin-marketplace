using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(CallConverter))]
public record Call
{
    private readonly Optional<SipCdr> _sipCdrValue;

    private readonly Optional<IncomingCdr> _incomingCdrValue;

    private readonly Optional<WebCdr> _webCdrValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Call(Optional<SipCdr> sipCdrValue,
        Optional<IncomingCdr> incomingCdrValue,
        Optional<WebCdr> webCdrValue,
        Optional<UnknownArm> unknownValue)
    {
        _sipCdrValue = sipCdrValue;
        _incomingCdrValue = incomingCdrValue;
        _webCdrValue = webCdrValue;
        _unknownValue = unknownValue;
    }

    public static Call SipCdr(SipCdr value) => new(Optional<SipCdr>.Some(value), default, default, default);

    public static Call IncomingCdr(IncomingCdr value) =>
        new(default, Optional<IncomingCdr>.Some(value), default, default);

    public static Call WebCdr(WebCdr value) => new(default, default, Optional<WebCdr>.Some(value), default);

    internal static Call Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSipCdr([NotNullWhen(true)] out SipCdr? value) => _sipCdrValue.TryGetValue(out value);

    public bool TryGetIncomingCdr([NotNullWhen(true)] out IncomingCdr? value) =>
        _incomingCdrValue.TryGetValue(out value);

    public bool TryGetWebCdr([NotNullWhen(true)] out WebCdr? value) => _webCdrValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Call(SipCdr value) => SipCdr(value);

    public static implicit operator Call(IncomingCdr value) => IncomingCdr(value);

    public static implicit operator Call(WebCdr value) => WebCdr(value);

    public TResult Match<TResult>(Func<SipCdr, TResult> onSipCdr,
        Func<IncomingCdr, TResult> onIncomingCdr,
        Func<WebCdr, TResult> onWebCdr,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSipCdr(out var sipCdrValue) => onSipCdr(sipCdrValue),
            _ when TryGetIncomingCdr(out var incomingCdrValue) => onIncomingCdr(incomingCdrValue),
            _ when TryGetWebCdr(out var webCdrValue) => onWebCdr(webCdrValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Call)} holds no value.")
        };

    public void Match(Action<SipCdr> onSipCdr,
        Action<IncomingCdr> onIncomingCdr,
        Action<WebCdr> onWebCdr,
        Action<JsonElement> otherwise)
    {
        if (TryGetSipCdr(out var sipCdrValue)) onSipCdr(sipCdrValue);
        else if (TryGetIncomingCdr(out var incomingCdrValue)) onIncomingCdr(incomingCdrValue);
        else if (TryGetWebCdr(out var webCdrValue)) onWebCdr(webCdrValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Call)} holds no value.");
    }
}

file sealed class CallConverter : JsonConverter<Call>
{
    public override Call Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SipCdr>(root, options, out var sipCdrValue))
        {
            return Call.SipCdr(sipCdrValue);
        }
        if (JsonSerializer.TryDeserialize<IncomingCdr>(root, options, out var incomingCdrValue))
        {
            return Call.IncomingCdr(incomingCdrValue);
        }
        if (JsonSerializer.TryDeserialize<WebCdr>(root, options, out var webCdrValue))
        {
            return Call.WebCdr(webCdrValue);
        }
        return Call.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Call value, JsonSerializerOptions options)
    {
        if (value.TryGetSipCdr(out var sipCdrValue))
        {
            JsonSerializer.Serialize(writer, sipCdrValue, options);
        }
        else if (value.TryGetIncomingCdr(out var incomingCdrValue))
        {
            JsonSerializer.Serialize(writer, incomingCdrValue, options);
        }
        else if (value.TryGetWebCdr(out var webCdrValue))
        {
            JsonSerializer.Serialize(writer, webCdrValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Call)} contains no valid value to serialize.");
        }
    }
}
