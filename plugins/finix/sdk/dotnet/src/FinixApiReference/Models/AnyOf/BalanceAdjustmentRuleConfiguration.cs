using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(BalanceAdjustmentRuleConfigurationConverter))]
public record BalanceAdjustmentRuleConfiguration
{
    private readonly Optional<DailyRuleConfiguration> _dailyRuleConfigurationValue;

    private readonly Optional<MonthlyRuleConfiguration> _monthlyRuleConfigurationValue;

    private readonly Optional<MaximumTransactionAmount> _maximumTransactionAmountValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private BalanceAdjustmentRuleConfiguration(Optional<DailyRuleConfiguration> dailyRuleConfigurationValue,
        Optional<MonthlyRuleConfiguration> monthlyRuleConfigurationValue,
        Optional<MaximumTransactionAmount> maximumTransactionAmountValue,
        Optional<UnknownArm> unknownValue)
    {
        _dailyRuleConfigurationValue = dailyRuleConfigurationValue;
        _monthlyRuleConfigurationValue = monthlyRuleConfigurationValue;
        _maximumTransactionAmountValue = maximumTransactionAmountValue;
        _unknownValue = unknownValue;
    }

    public static BalanceAdjustmentRuleConfiguration DailyRuleConfiguration(DailyRuleConfiguration value) =>
        new(Optional<DailyRuleConfiguration>.Some(value), default, default, default);

    public static BalanceAdjustmentRuleConfiguration MonthlyRuleConfiguration(MonthlyRuleConfiguration value) =>
        new(default, Optional<MonthlyRuleConfiguration>.Some(value), default, default);

    public static BalanceAdjustmentRuleConfiguration MaximumTransactionAmount(MaximumTransactionAmount value) =>
        new(default, default, Optional<MaximumTransactionAmount>.Some(value), default);

    internal static BalanceAdjustmentRuleConfiguration Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDailyRuleConfiguration([NotNullWhen(true)] out DailyRuleConfiguration? value) =>
        _dailyRuleConfigurationValue.TryGetValue(out value);

    public bool TryGetMonthlyRuleConfiguration([NotNullWhen(true)] out MonthlyRuleConfiguration? value) =>
        _monthlyRuleConfigurationValue.TryGetValue(out value);

    public bool TryGetMaximumTransactionAmount([NotNullWhen(true)] out MaximumTransactionAmount? value) =>
        _maximumTransactionAmountValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator BalanceAdjustmentRuleConfiguration(DailyRuleConfiguration value) =>
        DailyRuleConfiguration(value);

    public static implicit operator BalanceAdjustmentRuleConfiguration(MonthlyRuleConfiguration value) =>
        MonthlyRuleConfiguration(value);

    public static implicit operator BalanceAdjustmentRuleConfiguration(MaximumTransactionAmount value) =>
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
            _ => throw new InvalidOperationException($"{nameof(BalanceAdjustmentRuleConfiguration)} holds no value.")
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
        else throw new InvalidOperationException($"{nameof(BalanceAdjustmentRuleConfiguration)} holds no value.");
    }
}

file sealed class BalanceAdjustmentRuleConfigurationConverter : JsonConverter<BalanceAdjustmentRuleConfiguration>
{
    public override BalanceAdjustmentRuleConfiguration Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DailyRuleConfiguration>(root, options, out var dailyRuleConfigurationValue))
        {
            return BalanceAdjustmentRuleConfiguration.DailyRuleConfiguration(dailyRuleConfigurationValue);
        }
        if (JsonSerializer.TryDeserialize<MonthlyRuleConfiguration>(
            root,
            options,
            out var monthlyRuleConfigurationValue))
        {
            return BalanceAdjustmentRuleConfiguration.MonthlyRuleConfiguration(monthlyRuleConfigurationValue);
        }
        if (JsonSerializer.TryDeserialize<MaximumTransactionAmount>(
            root,
            options,
            out var maximumTransactionAmountValue))
        {
            return BalanceAdjustmentRuleConfiguration.MaximumTransactionAmount(maximumTransactionAmountValue);
        }
        return BalanceAdjustmentRuleConfiguration.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        BalanceAdjustmentRuleConfiguration value,
        JsonSerializerOptions options)
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
            throw new JsonException(
                $"{nameof(BalanceAdjustmentRuleConfiguration)} contains no valid value to serialize.");
        }
    }
}
