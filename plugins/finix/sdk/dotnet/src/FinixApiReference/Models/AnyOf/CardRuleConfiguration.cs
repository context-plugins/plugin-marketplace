using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(CardRuleConfigurationConverter))]
public record CardRuleConfiguration
{
    private readonly Optional<DailyRuleConfiguration> _dailyRuleConfigurationValue;

    private readonly Optional<MonthlyRuleConfiguration> _monthlyRuleConfigurationValue;

    private readonly Optional<MaximumTransactionAmount> _maximumTransactionAmountValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CardRuleConfiguration(Optional<DailyRuleConfiguration> dailyRuleConfigurationValue,
        Optional<MonthlyRuleConfiguration> monthlyRuleConfigurationValue,
        Optional<MaximumTransactionAmount> maximumTransactionAmountValue,
        Optional<UnknownArm> unknownValue)
    {
        _dailyRuleConfigurationValue = dailyRuleConfigurationValue;
        _monthlyRuleConfigurationValue = monthlyRuleConfigurationValue;
        _maximumTransactionAmountValue = maximumTransactionAmountValue;
        _unknownValue = unknownValue;
    }

    public static CardRuleConfiguration DailyRuleConfiguration(DailyRuleConfiguration value) =>
        new(Optional<DailyRuleConfiguration>.Some(value), default, default, default);

    public static CardRuleConfiguration MonthlyRuleConfiguration(MonthlyRuleConfiguration value) =>
        new(default, Optional<MonthlyRuleConfiguration>.Some(value), default, default);

    public static CardRuleConfiguration MaximumTransactionAmount(MaximumTransactionAmount value) =>
        new(default, default, Optional<MaximumTransactionAmount>.Some(value), default);

    internal static CardRuleConfiguration Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDailyRuleConfiguration([NotNullWhen(true)] out DailyRuleConfiguration? value) =>
        _dailyRuleConfigurationValue.TryGetValue(out value);

    public bool TryGetMonthlyRuleConfiguration([NotNullWhen(true)] out MonthlyRuleConfiguration? value) =>
        _monthlyRuleConfigurationValue.TryGetValue(out value);

    public bool TryGetMaximumTransactionAmount([NotNullWhen(true)] out MaximumTransactionAmount? value) =>
        _maximumTransactionAmountValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CardRuleConfiguration(DailyRuleConfiguration value) =>
        DailyRuleConfiguration(value);

    public static implicit operator CardRuleConfiguration(MonthlyRuleConfiguration value) =>
        MonthlyRuleConfiguration(value);

    public static implicit operator CardRuleConfiguration(MaximumTransactionAmount value) =>
        MaximumTransactionAmount(value);

    public TResult Match<TResult>(Func<DailyRuleConfiguration, TResult> onDailyRuleConfiguration,
        Func<MonthlyRuleConfiguration, TResult> onMonthlyRuleConfiguration,
        Func<MaximumTransactionAmount, TResult> onMaximumTransactionAmount,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDailyRuleConfiguration(out var dailyRuleConfigurationValue) => onDailyRuleConfiguration(
                dailyRuleConfigurationValue),
            _ when TryGetMonthlyRuleConfiguration(out var monthlyRuleConfigurationValue) => onMonthlyRuleConfiguration(
                monthlyRuleConfigurationValue),
            _ when TryGetMaximumTransactionAmount(out var maximumTransactionAmountValue) => onMaximumTransactionAmount(
                maximumTransactionAmountValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CardRuleConfiguration)} holds no value.")
        };

    public void Match(Action<DailyRuleConfiguration> onDailyRuleConfiguration,
        Action<MonthlyRuleConfiguration> onMonthlyRuleConfiguration,
        Action<MaximumTransactionAmount> onMaximumTransactionAmount,
        Action<JsonElement> otherwise)
    {
        if (TryGetDailyRuleConfiguration(out var dailyRuleConfigurationValue)) onDailyRuleConfiguration(
            dailyRuleConfigurationValue);
        else if (TryGetMonthlyRuleConfiguration(out var monthlyRuleConfigurationValue)) onMonthlyRuleConfiguration(
            monthlyRuleConfigurationValue);
        else if (TryGetMaximumTransactionAmount(out var maximumTransactionAmountValue)) onMaximumTransactionAmount(
            maximumTransactionAmountValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CardRuleConfiguration)} holds no value.");
    }
}

file sealed class CardRuleConfigurationConverter : JsonConverter<CardRuleConfiguration>
{
    public override CardRuleConfiguration Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DailyRuleConfiguration>(root, options, out var dailyRuleConfigurationValue))
        {
            return CardRuleConfiguration.DailyRuleConfiguration(dailyRuleConfigurationValue);
        }
        if (JsonSerializer.TryDeserialize<MonthlyRuleConfiguration>(
            root,
            options,
            out var monthlyRuleConfigurationValue))
        {
            return CardRuleConfiguration.MonthlyRuleConfiguration(monthlyRuleConfigurationValue);
        }
        if (JsonSerializer.TryDeserialize<MaximumTransactionAmount>(
            root,
            options,
            out var maximumTransactionAmountValue))
        {
            return CardRuleConfiguration.MaximumTransactionAmount(maximumTransactionAmountValue);
        }
        return CardRuleConfiguration.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CardRuleConfiguration value, JsonSerializerOptions options)
    {
        if (value.TryGetDailyRuleConfiguration(out var dailyRuleConfigurationValue))
        {
            JsonSerializer.Serialize(writer, dailyRuleConfigurationValue, options);
        }
        else if (value.TryGetMonthlyRuleConfiguration(out var monthlyRuleConfigurationValue))
        {
            JsonSerializer.Serialize(writer, monthlyRuleConfigurationValue, options);
        }
        else if (value.TryGetMaximumTransactionAmount(out var maximumTransactionAmountValue))
        {
            JsonSerializer.Serialize(writer, maximumTransactionAmountValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CardRuleConfiguration)} contains no valid value to serialize.");
        }
    }
}
