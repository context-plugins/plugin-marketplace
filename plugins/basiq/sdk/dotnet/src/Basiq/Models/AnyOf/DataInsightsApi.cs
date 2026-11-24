using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

/// <summary>
/// Input data for the insight. The required fields vary by <c>type</c>.
/// </summary>
[JsonConverter(typeof(DataInsightsApiConverter))]
public record DataInsightsApi
{
    private readonly Optional<ExpenseRatioData> _expenseRatioDataValue;

    private readonly Optional<BalanceVerificationData> _balanceVerificationDataValue;

    private readonly Optional<AccountVerificationData> _accountVerificationDataValue;

    private readonly Optional<IdentityVerificationData> _identityVerificationDataValue;

    private readonly Optional<IncomeVerificationData> _incomeVerificationDataValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DataInsightsApi(Optional<ExpenseRatioData> expenseRatioDataValue,
        Optional<BalanceVerificationData> balanceVerificationDataValue,
        Optional<AccountVerificationData> accountVerificationDataValue,
        Optional<IdentityVerificationData> identityVerificationDataValue,
        Optional<IncomeVerificationData> incomeVerificationDataValue,
        Optional<UnknownArm> unknownValue)
    {
        _expenseRatioDataValue = expenseRatioDataValue;
        _balanceVerificationDataValue = balanceVerificationDataValue;
        _accountVerificationDataValue = accountVerificationDataValue;
        _identityVerificationDataValue = identityVerificationDataValue;
        _incomeVerificationDataValue = incomeVerificationDataValue;
        _unknownValue = unknownValue;
    }

    public static DataInsightsApi ExpenseRatioData(ExpenseRatioData value) =>
        new(Optional<ExpenseRatioData>.Some(value), default, default, default, default, default);

    public static DataInsightsApi BalanceVerificationData(BalanceVerificationData value) =>
        new(default, Optional<BalanceVerificationData>.Some(value), default, default, default, default);

    public static DataInsightsApi AccountVerificationData(AccountVerificationData value) =>
        new(default, default, Optional<AccountVerificationData>.Some(value), default, default, default);

    public static DataInsightsApi IdentityVerificationData(IdentityVerificationData value) =>
        new(default, default, default, Optional<IdentityVerificationData>.Some(value), default, default);

    public static DataInsightsApi IncomeVerificationData(IncomeVerificationData value) =>
        new(default, default, default, default, Optional<IncomeVerificationData>.Some(value), default);

    internal static DataInsightsApi Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetExpenseRatioData([NotNullWhen(true)] out ExpenseRatioData? value) =>
        _expenseRatioDataValue.TryGetValue(out value);

    public bool TryGetBalanceVerificationData([NotNullWhen(true)] out BalanceVerificationData? value) =>
        _balanceVerificationDataValue.TryGetValue(out value);

    public bool TryGetAccountVerificationData([NotNullWhen(true)] out AccountVerificationData? value) =>
        _accountVerificationDataValue.TryGetValue(out value);

    public bool TryGetIdentityVerificationData([NotNullWhen(true)] out IdentityVerificationData? value) =>
        _identityVerificationDataValue.TryGetValue(out value);

    public bool TryGetIncomeVerificationData([NotNullWhen(true)] out IncomeVerificationData? value) =>
        _incomeVerificationDataValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DataInsightsApi(ExpenseRatioData value) => ExpenseRatioData(value);

    public static implicit operator DataInsightsApi(BalanceVerificationData value) => BalanceVerificationData(value);

    public static implicit operator DataInsightsApi(AccountVerificationData value) => AccountVerificationData(value);

    public static implicit operator DataInsightsApi(IdentityVerificationData value) => IdentityVerificationData(value);

    public static implicit operator DataInsightsApi(IncomeVerificationData value) => IncomeVerificationData(value);

    public TResult Match<TResult>(Func<ExpenseRatioData, TResult> onExpenseRatioData,
        Func<BalanceVerificationData, TResult> onBalanceVerificationData,
        Func<AccountVerificationData, TResult> onAccountVerificationData,
        Func<IdentityVerificationData, TResult> onIdentityVerificationData,
        Func<IncomeVerificationData, TResult> onIncomeVerificationData,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetExpenseRatioData(out var expenseRatioDataValue) => onExpenseRatioData(expenseRatioDataValue),
            _ when TryGetBalanceVerificationData(out var balanceVerificationDataValue) => onBalanceVerificationData(
                balanceVerificationDataValue),
            _ when TryGetAccountVerificationData(out var accountVerificationDataValue) => onAccountVerificationData(
                accountVerificationDataValue),
            _ when TryGetIdentityVerificationData(out var identityVerificationDataValue) => onIdentityVerificationData(
                identityVerificationDataValue),
            _ when TryGetIncomeVerificationData(out var incomeVerificationDataValue) => onIncomeVerificationData(
                incomeVerificationDataValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DataInsightsApi)} holds no value.")
        };

    public void Match(Action<ExpenseRatioData> onExpenseRatioData,
        Action<BalanceVerificationData> onBalanceVerificationData,
        Action<AccountVerificationData> onAccountVerificationData,
        Action<IdentityVerificationData> onIdentityVerificationData,
        Action<IncomeVerificationData> onIncomeVerificationData,
        Action<JsonElement> otherwise)
    {
        if (TryGetExpenseRatioData(out var expenseRatioDataValue)) onExpenseRatioData(expenseRatioDataValue);
        else if (TryGetBalanceVerificationData(out var balanceVerificationDataValue)) onBalanceVerificationData(
            balanceVerificationDataValue);
        else if (TryGetAccountVerificationData(out var accountVerificationDataValue)) onAccountVerificationData(
            accountVerificationDataValue);
        else if (TryGetIdentityVerificationData(out var identityVerificationDataValue)) onIdentityVerificationData(
            identityVerificationDataValue);
        else if (TryGetIncomeVerificationData(out var incomeVerificationDataValue)) onIncomeVerificationData(
            incomeVerificationDataValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DataInsightsApi)} holds no value.");
    }
}

file sealed class DataInsightsApiConverter : JsonConverter<DataInsightsApi>
{
    public override DataInsightsApi Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ExpenseRatioData>(root, options, out var expenseRatioDataValue))
        {
            return DataInsightsApi.ExpenseRatioData(expenseRatioDataValue);
        }
        if (JsonSerializer.TryDeserialize<BalanceVerificationData>(root, options, out var balanceVerificationDataValue))
        {
            return DataInsightsApi.BalanceVerificationData(balanceVerificationDataValue);
        }
        if (JsonSerializer.TryDeserialize<AccountVerificationData>(root, options, out var accountVerificationDataValue))
        {
            return DataInsightsApi.AccountVerificationData(accountVerificationDataValue);
        }
        if (JsonSerializer.TryDeserialize<IdentityVerificationData>(
            root,
            options,
            out var identityVerificationDataValue))
        {
            return DataInsightsApi.IdentityVerificationData(identityVerificationDataValue);
        }
        if (JsonSerializer.TryDeserialize<IncomeVerificationData>(root, options, out var incomeVerificationDataValue))
        {
            return DataInsightsApi.IncomeVerificationData(incomeVerificationDataValue);
        }
        return DataInsightsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DataInsightsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetExpenseRatioData(out var expenseRatioDataValue))
        {
            JsonSerializer.Serialize(writer, expenseRatioDataValue, options);
        }
        else if (value.TryGetBalanceVerificationData(out var balanceVerificationDataValue))
        {
            JsonSerializer.Serialize(writer, balanceVerificationDataValue, options);
        }
        else if (value.TryGetAccountVerificationData(out var accountVerificationDataValue))
        {
            JsonSerializer.Serialize(writer, accountVerificationDataValue, options);
        }
        else if (value.TryGetIdentityVerificationData(out var identityVerificationDataValue))
        {
            JsonSerializer.Serialize(writer, identityVerificationDataValue, options);
        }
        else if (value.TryGetIncomeVerificationData(out var incomeVerificationDataValue))
        {
            JsonSerializer.Serialize(writer, incomeVerificationDataValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(DataInsightsApi)} contains no valid value to serialize.");
        }
    }
}
