using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

[JsonConverter(typeof(Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetConverter))]
public record Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet
{
    private readonly Optional<FindAllSchemaUpdatedEvent> _findAllSchemaUpdatedEventValue;

    private readonly Optional<FindAllRunStatusEvent> _findAllRunStatusEventValue;

    private readonly Optional<FindAllCandidateMatchStatusEvent> _findAllCandidateMatchStatusEventValue;

    private readonly Optional<ErrorEvent> _errorEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(Optional<FindAllSchemaUpdatedEvent> findAllSchemaUpdatedEventValue,
        Optional<FindAllRunStatusEvent> findAllRunStatusEventValue,
        Optional<FindAllCandidateMatchStatusEvent> findAllCandidateMatchStatusEventValue,
        Optional<ErrorEvent> errorEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _findAllSchemaUpdatedEventValue = findAllSchemaUpdatedEventValue;
        _findAllRunStatusEventValue = findAllRunStatusEventValue;
        _findAllCandidateMatchStatusEventValue = findAllCandidateMatchStatusEventValue;
        _errorEventValue = errorEventValue;
        _unknownValue = unknownValue;
    }

    public static Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet FindAllSchemaUpdatedEvent(FindAllSchemaUpdatedEvent value) =>
        new(Optional<FindAllSchemaUpdatedEvent>.Some(value), default, default, default, default);

    public static Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet FindAllRunStatusEvent(FindAllRunStatusEvent value) =>
        new(default, Optional<FindAllRunStatusEvent>.Some(value), default, default, default);

    public static Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet FindAllCandidateMatchStatusEvent(FindAllCandidateMatchStatusEvent value) =>
        new(default, default, Optional<FindAllCandidateMatchStatusEvent>.Some(value), default, default);

    public static Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet ErrorEvent(ErrorEvent value) =>
        new(default, default, default, Optional<ErrorEvent>.Some(value), default);

    internal static Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFindAllSchemaUpdatedEvent([NotNullWhen(true)] out FindAllSchemaUpdatedEvent? value) =>
        _findAllSchemaUpdatedEventValue.TryGetValue(out value);

    public bool TryGetFindAllRunStatusEvent([NotNullWhen(true)] out FindAllRunStatusEvent? value) =>
        _findAllRunStatusEventValue.TryGetValue(out value);

    public bool TryGetFindAllCandidateMatchStatusEvent([NotNullWhen(true)] out FindAllCandidateMatchStatusEvent? value) =>
        _findAllCandidateMatchStatusEventValue.TryGetValue(out value);

    public bool TryGetErrorEvent([NotNullWhen(true)] out ErrorEvent? value) => _errorEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(FindAllSchemaUpdatedEvent value) =>
        FindAllSchemaUpdatedEvent(value);

    public static implicit operator Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(FindAllRunStatusEvent value) =>
        FindAllRunStatusEvent(value);

    public static implicit operator Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(FindAllCandidateMatchStatusEvent value) =>
        FindAllCandidateMatchStatusEvent(value);

    public static implicit operator Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(ErrorEvent value) =>
        ErrorEvent(value);

    public TResult Match<TResult>(Func<FindAllSchemaUpdatedEvent, TResult> onFindAllSchemaUpdatedEvent,
        Func<FindAllRunStatusEvent, TResult> onFindAllRunStatusEvent,
        Func<FindAllCandidateMatchStatusEvent, TResult> onFindAllCandidateMatchStatusEvent,
        Func<ErrorEvent, TResult> onErrorEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFindAllSchemaUpdatedEvent(
                out var findAllSchemaUpdatedEventValue) => onFindAllSchemaUpdatedEvent(findAllSchemaUpdatedEventValue),
            _ when TryGetFindAllRunStatusEvent(out var findAllRunStatusEventValue) => onFindAllRunStatusEvent(
                findAllRunStatusEventValue),
            _ when TryGetFindAllCandidateMatchStatusEvent(
                out var findAllCandidateMatchStatusEventValue) => onFindAllCandidateMatchStatusEvent(
                findAllCandidateMatchStatusEventValue),
            _ when TryGetErrorEvent(out var errorEventValue) => onErrorEvent(errorEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet)} holds no value.")
        };

    public void Match(Action<FindAllSchemaUpdatedEvent> onFindAllSchemaUpdatedEvent,
        Action<FindAllRunStatusEvent> onFindAllRunStatusEvent,
        Action<FindAllCandidateMatchStatusEvent> onFindAllCandidateMatchStatusEvent,
        Action<ErrorEvent> onErrorEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetFindAllSchemaUpdatedEvent(out var findAllSchemaUpdatedEventValue)) onFindAllSchemaUpdatedEvent(
            findAllSchemaUpdatedEventValue);
        else if (TryGetFindAllRunStatusEvent(out var findAllRunStatusEventValue)) onFindAllRunStatusEvent(
            findAllRunStatusEventValue);
        else if (TryGetFindAllCandidateMatchStatusEvent(
            out var findAllCandidateMatchStatusEventValue)) onFindAllCandidateMatchStatusEvent(
            findAllCandidateMatchStatusEventValue);
        else if (TryGetErrorEvent(out var errorEventValue)) onErrorEvent(errorEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet)} holds no value.");
    }
}

file sealed class Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetConverter : JsonConverter<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>
{
    public override Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "findall.schema.updated" => Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.FindAllSchemaUpdatedEvent(
                root.Deserialize<FindAllSchemaUpdatedEvent>(options)!),
            "findall.status" => Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.FindAllRunStatusEvent(
                root.Deserialize<FindAllRunStatusEvent>(options)!),
            "findall.candidate.generated" or "findall.candidate.matched" or "findall.candidate.unmatched" or
                "findall.candidate.discarded" or
                "findall.candidate.enriched" => Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.FindAllCandidateMatchStatusEvent(
                root.Deserialize<FindAllCandidateMatchStatusEvent>(options)!),
            "error" => Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.ErrorEvent(
                root.Deserialize<ErrorEvent>(options)!),
            _ => Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer,
        Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet value,
        JsonSerializerOptions options)
    {
        if (value.TryGetFindAllSchemaUpdatedEvent(out var findAllSchemaUpdatedEventValue))
        {
            JsonSerializer.Serialize(writer, findAllSchemaUpdatedEventValue, options);
        }
        else if (value.TryGetFindAllRunStatusEvent(out var findAllRunStatusEventValue))
        {
            JsonSerializer.Serialize(writer, findAllRunStatusEventValue, options);
        }
        else if (value.TryGetFindAllCandidateMatchStatusEvent(out var findAllCandidateMatchStatusEventValue))
        {
            JsonSerializer.Serialize(writer, findAllCandidateMatchStatusEventValue, options);
        }
        else if (value.TryGetErrorEvent(out var errorEventValue))
        {
            JsonSerializer.Serialize(writer, errorEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet)} contains no valid value to serialize.");
        }
    }
}
