using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

/// <summary>
/// <c>catalog</c> for global base models, <c>owned</c> for the team's trainable forks; both when omitted. Signed-out callers must pass <c>catalog</c>.
/// </summary>
[JsonConverter(typeof(ScopeHudPlatformModelsApiConverter))]
public record ScopeHudPlatformModelsApi
{
    private readonly Optional<ModelListScope> _modelListScopeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ScopeHudPlatformModelsApi(Optional<ModelListScope> modelListScopeValue, Optional<UnknownArm> unknownValue)
    {
        _modelListScopeValue = modelListScopeValue;
        _unknownValue = unknownValue;
    }

    public static ScopeHudPlatformModelsApi ModelListScope(ModelListScope value) =>
        new(Optional<ModelListScope>.Some(value), default);

    internal static ScopeHudPlatformModelsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModelListScope([NotNullWhen(true)] out ModelListScope? value) =>
        _modelListScopeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ScopeHudPlatformModelsApi(ModelListScope value) => ModelListScope(value);

    public TResult Match<TResult>(Func<ModelListScope, TResult> onModelListScope,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModelListScope(out var modelListScopeValue) => onModelListScope(modelListScopeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ScopeHudPlatformModelsApi)} holds no value.")
        };

    public void Match(Action<ModelListScope> onModelListScope, Action<JsonElement> otherwise)
    {
        if (TryGetModelListScope(out var modelListScopeValue)) onModelListScope(modelListScopeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ScopeHudPlatformModelsApi)} holds no value.");
    }
}

file sealed class ScopeHudPlatformModelsApiConverter : JsonConverter<ScopeHudPlatformModelsApi>
{
    public override ScopeHudPlatformModelsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModelListScope>(root, options, out var modelListScopeValue))
        {
            return ScopeHudPlatformModelsApi.ModelListScope(modelListScopeValue);
        }
        return ScopeHudPlatformModelsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ScopeHudPlatformModelsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetModelListScope(out var modelListScopeValue))
        {
            JsonSerializer.Serialize(writer, modelListScopeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ScopeHudPlatformModelsApi)} contains no valid value to serialize.");
        }
    }
}
