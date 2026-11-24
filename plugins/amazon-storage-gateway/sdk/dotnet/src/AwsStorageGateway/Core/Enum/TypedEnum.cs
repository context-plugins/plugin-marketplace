using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text.Json;

namespace AwsStorageGateway.Core.Enum;

internal interface IClosedEnum;

/// <summary>
/// Base class for type-safe enum pattern with flexible serialization
/// </summary>
/// <typeparam name="TValue">The underlying value type (e.g., string, int)</typeparam>
/// <typeparam name="TEnum">The actual enum type inheriting from this class</typeparam>
public abstract record TypedEnum<TValue, TEnum>
    where TEnum : TypedEnum<TValue, TEnum>
    where TValue : IEquatable<TValue>
{
    private static readonly bool Closed = typeof(IClosedEnum).IsAssignableFrom(typeof(TEnum));

    private static readonly Lazy<Dictionary<TValue, TEnum>> KnownValues = new(() =>
        typeof(TEnum)
            .GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.DeclaredOnly)
            .Where(f => f.FieldType == typeof(TEnum))
            .Select(f => (TEnum)f.GetValue(null)!)
            .ToDictionary(e => e.Value, e => e));

    private static readonly Lazy<Func<TValue, TEnum>> Construct = new(() =>
    {
        var constructor = typeof(TEnum).GetConstructor(
            BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Instance,
            null,
            [typeof(TValue)],
            null
        );

        if (constructor is null)
            throw new InvalidOperationException(
                $"Type {typeof(TEnum).Name} must have a constructor that accepts a {typeof(TValue).Name} parameter");

        var value = Expression.Parameter(typeof(TValue), "value");
        return Expression.Lambda<Func<TValue, TEnum>>(Expression.New(constructor, value), value).Compile();
    });

    /// <summary>
    /// The underlying value of the enum
    /// </summary>
    public TValue Value { get; }

    protected TypedEnum(TValue value) => Value = value;

    internal static TEnum FromValueCore(TValue value)
    {
        if (KnownValues.Value.TryGetValue(value, out var known))
            return known;

        if (Closed)
            throw new JsonException($"Unknown value '{value}' when parsing {typeof(TEnum).Name}.");

        return Construct.Value(value);
    }

    /// <summary>
    /// Tries to get a known value, returns false if value is not predefined
    /// </summary>
    public static bool TryGetKnownValue(TValue? value, [NotNullWhen(true)] out TEnum? result)
    {
        result = null;
        return value is not null && KnownValues.Value.TryGetValue(value, out result);
    }

    /// <summary>
    /// Checks if this value is one of the predefined constants
    /// </summary>
    public bool IsKnownValue() => KnownValues.Value.ContainsKey(Value);

    public bool Is(TValue value) => Value.Equals(value);

    public static bool operator ==(TypedEnum<TValue, TEnum>? left, TValue? right) =>
        left is not null && right is not null && left.Value.Equals(right);

    public static bool operator !=(TypedEnum<TValue, TEnum>? left, TValue? right) => !(left == right);

    public static bool operator ==(TValue? left, TypedEnum<TValue, TEnum>? right) => right == left;

    public static bool operator !=(TValue? left, TypedEnum<TValue, TEnum>? right) => !(right == left);

    /// <summary>
    /// Gets all known enum values
    /// </summary>
    public static IReadOnlyCollection<TEnum> GetKnownValues() => KnownValues.Value.Values;

    public override string ToString() => Value.ToString() ?? string.Empty;

    // Implicit conversion to underlying value
    public static implicit operator TValue(TypedEnum<TValue, TEnum> typedEnum) => typedEnum.Value;
}
