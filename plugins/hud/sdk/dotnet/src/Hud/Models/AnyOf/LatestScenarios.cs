using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(LatestScenariosConverter))]
public record LatestScenarios
{
    private readonly Optional<IReadOnlyList<ScenarioResponse>> _listOfScenarioResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LatestScenarios(Optional<IReadOnlyList<ScenarioResponse>> listOfScenarioResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfScenarioResponseValue = listOfScenarioResponseValue;
        _unknownValue = unknownValue;
    }

    public static LatestScenarios ListOfScenarioResponse(IReadOnlyList<ScenarioResponse> value) =>
        new(Optional<IReadOnlyList<ScenarioResponse>>.Some(value), default);

    internal static LatestScenarios Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfScenarioResponse([NotNullWhen(true)] out IReadOnlyList<ScenarioResponse>? value) =>
        _listOfScenarioResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<ScenarioResponse>, TResult> onListOfScenarioResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfScenarioResponse(out var listOfScenarioResponseValue) => onListOfScenarioResponse(
                listOfScenarioResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LatestScenarios)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<ScenarioResponse>> onListOfScenarioResponse, Action<JsonElement> otherwise)
    {
        if (TryGetListOfScenarioResponse(out var listOfScenarioResponseValue)) onListOfScenarioResponse(
            listOfScenarioResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LatestScenarios)} holds no value.");
    }
}

file sealed class LatestScenariosConverter : JsonConverter<LatestScenarios>
{
    public override LatestScenarios Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ScenarioResponse>>(
            root,
            options,
            out var listOfScenarioResponseValue))
        {
            return LatestScenarios.ListOfScenarioResponse(listOfScenarioResponseValue);
        }
        return LatestScenarios.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LatestScenarios value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfScenarioResponse(out var listOfScenarioResponseValue))
        {
            JsonSerializer.Serialize(writer, listOfScenarioResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LatestScenarios)} contains no valid value to serialize.");
        }
    }
}
