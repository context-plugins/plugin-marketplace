using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Extensions;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models.AnyOf;

/// <summary>
/// Restriction updates keyed by category name, or BaseInheritance to reset to base.
/// </summary>
[JsonConverter(typeof(CategoriesConverter))]
public record Categories
{
    private readonly Optional<IReadOnlyDictionary<string, CategoryRestrictionUpdate>> _mapOfCategoryRestrictionUpdateValue;

    private readonly Optional<BaseInheritance> _baseInheritanceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Categories(Optional<IReadOnlyDictionary<string, CategoryRestrictionUpdate>> mapOfCategoryRestrictionUpdateValue,
        Optional<BaseInheritance> baseInheritanceValue,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfCategoryRestrictionUpdateValue = mapOfCategoryRestrictionUpdateValue;
        _baseInheritanceValue = baseInheritanceValue;
        _unknownValue = unknownValue;
    }

    public static Categories MapOfCategoryRestrictionUpdate(IReadOnlyDictionary<string, CategoryRestrictionUpdate> value) =>
        new(Optional<IReadOnlyDictionary<string, CategoryRestrictionUpdate>>.Some(value), default, default);

    public static Categories BaseInheritance(BaseInheritance value) =>
        new(default, Optional<BaseInheritance>.Some(value), default);

    internal static Categories Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfCategoryRestrictionUpdate([NotNullWhen(true)] out IReadOnlyDictionary<string, CategoryRestrictionUpdate>? value) =>
        _mapOfCategoryRestrictionUpdateValue.TryGetValue(out value);

    public bool TryGetBaseInheritance([NotNullWhen(true)] out BaseInheritance? value) =>
        _baseInheritanceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Categories(BaseInheritance value) => BaseInheritance(value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, CategoryRestrictionUpdate>, TResult> onMapOfCategoryRestrictionUpdate,
        Func<BaseInheritance, TResult> onBaseInheritance,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfCategoryRestrictionUpdate(
                out var mapOfCategoryRestrictionUpdateValue) => onMapOfCategoryRestrictionUpdate(
                mapOfCategoryRestrictionUpdateValue),
            _ when TryGetBaseInheritance(out var baseInheritanceValue) => onBaseInheritance(baseInheritanceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Categories)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, CategoryRestrictionUpdate>> onMapOfCategoryRestrictionUpdate,
        Action<BaseInheritance> onBaseInheritance,
        Action<JsonElement> otherwise)
    {
        if (TryGetMapOfCategoryRestrictionUpdate(
            out var mapOfCategoryRestrictionUpdateValue)) onMapOfCategoryRestrictionUpdate(
            mapOfCategoryRestrictionUpdateValue);
        else if (TryGetBaseInheritance(out var baseInheritanceValue)) onBaseInheritance(baseInheritanceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Categories)} holds no value.");
    }
}

file sealed class CategoriesConverter : JsonConverter<Categories>
{
    public override Categories Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, CategoryRestrictionUpdate>>(
            root,
            options,
            out var mapOfCategoryRestrictionUpdateValue))
        {
            return Categories.MapOfCategoryRestrictionUpdate(mapOfCategoryRestrictionUpdateValue);
        }
        if (JsonSerializer.TryDeserialize<BaseInheritance>(root, options, out var baseInheritanceValue))
        {
            return Categories.BaseInheritance(baseInheritanceValue);
        }
        return Categories.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Categories value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfCategoryRestrictionUpdate(out var mapOfCategoryRestrictionUpdateValue))
        {
            JsonSerializer.Serialize(writer, mapOfCategoryRestrictionUpdateValue, options);
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
            throw new JsonException($"{nameof(Categories)} contains no valid value to serialize.");
        }
    }
}
