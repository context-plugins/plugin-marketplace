using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Extensions;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models.AnyOf;

/// <summary>
/// Restriction updates keyed by custom category name, or BaseInheritance to reset to base.
/// </summary>
[JsonConverter(typeof(CustomCategoriesConverter))]
public record CustomCategories
{
    private readonly Optional<IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>> _mapOfCustomCategoryRestrictionUpdateValue;

    private readonly Optional<BaseInheritance> _baseInheritanceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CustomCategories(Optional<IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>> mapOfCustomCategoryRestrictionUpdateValue,
        Optional<BaseInheritance> baseInheritanceValue,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfCustomCategoryRestrictionUpdateValue = mapOfCustomCategoryRestrictionUpdateValue;
        _baseInheritanceValue = baseInheritanceValue;
        _unknownValue = unknownValue;
    }

    public static CustomCategories MapOfCustomCategoryRestrictionUpdate(IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate> value) =>
        new(Optional<IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>>.Some(value), default, default);

    public static CustomCategories BaseInheritance(BaseInheritance value) =>
        new(default, Optional<BaseInheritance>.Some(value), default);

    internal static CustomCategories Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfCustomCategoryRestrictionUpdate([NotNullWhen(true)] out IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>? value) =>
        _mapOfCustomCategoryRestrictionUpdateValue.TryGetValue(out value);

    public bool TryGetBaseInheritance([NotNullWhen(true)] out BaseInheritance? value) =>
        _baseInheritanceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CustomCategories(BaseInheritance value) => BaseInheritance(value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>, TResult> onMapOfCustomCategoryRestrictionUpdate,
        Func<BaseInheritance, TResult> onBaseInheritance,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfCustomCategoryRestrictionUpdate(
                out var mapOfCustomCategoryRestrictionUpdateValue) => onMapOfCustomCategoryRestrictionUpdate(
                mapOfCustomCategoryRestrictionUpdateValue),
            _ when TryGetBaseInheritance(out var baseInheritanceValue) => onBaseInheritance(baseInheritanceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CustomCategories)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>> onMapOfCustomCategoryRestrictionUpdate,
        Action<BaseInheritance> onBaseInheritance,
        Action<JsonElement> otherwise)
    {
        if (TryGetMapOfCustomCategoryRestrictionUpdate(
            out var mapOfCustomCategoryRestrictionUpdateValue)) onMapOfCustomCategoryRestrictionUpdate(
            mapOfCustomCategoryRestrictionUpdateValue);
        else if (TryGetBaseInheritance(out var baseInheritanceValue)) onBaseInheritance(baseInheritanceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CustomCategories)} holds no value.");
    }
}

file sealed class CustomCategoriesConverter : JsonConverter<CustomCategories>
{
    public override CustomCategories Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, CustomCategoryRestrictionUpdate>>(
            root,
            options,
            out var mapOfCustomCategoryRestrictionUpdateValue))
        {
            return CustomCategories.MapOfCustomCategoryRestrictionUpdate(mapOfCustomCategoryRestrictionUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<BaseInheritance>(root, options, out var baseInheritanceValue))
        {
            return CustomCategories.BaseInheritance(baseInheritanceValue);
        }
        return CustomCategories.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CustomCategories value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfCustomCategoryRestrictionUpdate(out var mapOfCustomCategoryRestrictionUpdateValue))
        {
            JsonSerializer.Serialize(writer, mapOfCustomCategoryRestrictionUpdateValue, options);
        }
        else if (value.TryGetBaseInheritance(out var baseInheritanceValue))
        {
            JsonSerializer.Serialize(writer, baseInheritanceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CustomCategories)} contains no valid value to serialize.");
        }
    }
}
