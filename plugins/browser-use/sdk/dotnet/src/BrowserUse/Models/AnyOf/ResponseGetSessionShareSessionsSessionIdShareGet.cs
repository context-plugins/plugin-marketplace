using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(ResponseGetSessionShareSessionsSessionIdShareGetConverter))]
public record ResponseGetSessionShareSessionsSessionIdShareGet
{
    private readonly Optional<SessionShareInfo> _sessionShareInfoValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResponseGetSessionShareSessionsSessionIdShareGet(Optional<SessionShareInfo> sessionShareInfoValue,
        Optional<UnknownArm> unknownValue)
    {
        _sessionShareInfoValue = sessionShareInfoValue;
        _unknownValue = unknownValue;
    }

    public static ResponseGetSessionShareSessionsSessionIdShareGet SessionShareInfo(SessionShareInfo value) =>
        new(Optional<SessionShareInfo>.Some(value), default);

    internal static ResponseGetSessionShareSessionsSessionIdShareGet Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSessionShareInfo([NotNullWhen(true)] out SessionShareInfo? value) =>
        _sessionShareInfoValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResponseGetSessionShareSessionsSessionIdShareGet(SessionShareInfo value) =>
        SessionShareInfo(value);

    public TResult Match<TResult>(Func<SessionShareInfo, TResult> onSessionShareInfo,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSessionShareInfo(out var sessionShareInfoValue) => onSessionShareInfo(sessionShareInfoValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(ResponseGetSessionShareSessionsSessionIdShareGet)} holds no value.")
        };

    public void Match(Action<SessionShareInfo> onSessionShareInfo, Action<JsonElement> otherwise)
    {
        if (TryGetSessionShareInfo(out var sessionShareInfoValue)) onSessionShareInfo(sessionShareInfoValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(ResponseGetSessionShareSessionsSessionIdShareGet)} holds no value.");
    }
}

file sealed class ResponseGetSessionShareSessionsSessionIdShareGetConverter : JsonConverter<ResponseGetSessionShareSessionsSessionIdShareGet>
{
    public override ResponseGetSessionShareSessionsSessionIdShareGet Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SessionShareInfo>(root, options, out var sessionShareInfoValue))
        {
            return ResponseGetSessionShareSessionsSessionIdShareGet.SessionShareInfo(sessionShareInfoValue);
        }
        return ResponseGetSessionShareSessionsSessionIdShareGet.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ResponseGetSessionShareSessionsSessionIdShareGet value,
        JsonSerializerOptions options)
    {
        if (value.TryGetSessionShareInfo(out var sessionShareInfoValue))
        {
            JsonSerializer.Serialize(writer, sessionShareInfoValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ResponseGetSessionShareSessionsSessionIdShareGet)} contains no valid value to serialize.");
        }
    }
}
