using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

[JsonConverter(typeof(Datum1InsightsApiConverter))]
public record Datum1InsightsApi
{
    private readonly Optional<AccountInsightDataItem> _accountInsightDataItemValue;

    private readonly Optional<BalanceInsightDataItem> _balanceInsightDataItemValue;

    private readonly Optional<IdentityInsightDataItem> _identityInsightDataItemValue;

    private readonly Optional<IncomeInsightDataItem> _incomeInsightDataItemValue;

    private readonly Optional<ExpenseRatioInsightDataItem> _expenseRatioInsightDataItemValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Datum1InsightsApi(Optional<AccountInsightDataItem> accountInsightDataItemValue,
        Optional<BalanceInsightDataItem> balanceInsightDataItemValue,
        Optional<IdentityInsightDataItem> identityInsightDataItemValue,
        Optional<IncomeInsightDataItem> incomeInsightDataItemValue,
        Optional<ExpenseRatioInsightDataItem> expenseRatioInsightDataItemValue,
        Optional<UnknownArm> unknownValue)
    {
        _accountInsightDataItemValue = accountInsightDataItemValue;
        _balanceInsightDataItemValue = balanceInsightDataItemValue;
        _identityInsightDataItemValue = identityInsightDataItemValue;
        _incomeInsightDataItemValue = incomeInsightDataItemValue;
        _expenseRatioInsightDataItemValue = expenseRatioInsightDataItemValue;
        _unknownValue = unknownValue;
    }

    public static Datum1InsightsApi AccountInsightDataItem(AccountInsightDataItem value) =>
        new(Optional<AccountInsightDataItem>.Some(value), default, default, default, default, default);

    public static Datum1InsightsApi BalanceInsightDataItem(BalanceInsightDataItem value) =>
        new(default, Optional<BalanceInsightDataItem>.Some(value), default, default, default, default);

    public static Datum1InsightsApi IdentityInsightDataItem(IdentityInsightDataItem value) =>
        new(default, default, Optional<IdentityInsightDataItem>.Some(value), default, default, default);

    public static Datum1InsightsApi IncomeInsightDataItem(IncomeInsightDataItem value) =>
        new(default, default, default, Optional<IncomeInsightDataItem>.Some(value), default, default);

    public static Datum1InsightsApi ExpenseRatioInsightDataItem(ExpenseRatioInsightDataItem value) =>
        new(default, default, default, default, Optional<ExpenseRatioInsightDataItem>.Some(value), default);

    internal static Datum1InsightsApi Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAccountInsightDataItem([NotNullWhen(true)] out AccountInsightDataItem? value) =>
        _accountInsightDataItemValue.TryGetValue(out value);

    public bool TryGetBalanceInsightDataItem([NotNullWhen(true)] out BalanceInsightDataItem? value) =>
        _balanceInsightDataItemValue.TryGetValue(out value);

    public bool TryGetIdentityInsightDataItem([NotNullWhen(true)] out IdentityInsightDataItem? value) =>
        _identityInsightDataItemValue.TryGetValue(out value);

    public bool TryGetIncomeInsightDataItem([NotNullWhen(true)] out IncomeInsightDataItem? value) =>
        _incomeInsightDataItemValue.TryGetValue(out value);

    public bool TryGetExpenseRatioInsightDataItem([NotNullWhen(true)] out ExpenseRatioInsightDataItem? value) =>
        _expenseRatioInsightDataItemValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Datum1InsightsApi(AccountInsightDataItem value) => AccountInsightDataItem(value);

    public static implicit operator Datum1InsightsApi(BalanceInsightDataItem value) => BalanceInsightDataItem(value);

    public static implicit operator Datum1InsightsApi(IdentityInsightDataItem value) => IdentityInsightDataItem(value);

    public static implicit operator Datum1InsightsApi(IncomeInsightDataItem value) => IncomeInsightDataItem(value);

    public static implicit operator Datum1InsightsApi(ExpenseRatioInsightDataItem value) =>
        ExpenseRatioInsightDataItem(value);

    public TResult Match<TResult>(Func<AccountInsightDataItem, TResult> onAccountInsightDataItem,
        Func<BalanceInsightDataItem, TResult> onBalanceInsightDataItem,
        Func<IdentityInsightDataItem, TResult> onIdentityInsightDataItem,
        Func<IncomeInsightDataItem, TResult> onIncomeInsightDataItem,
        Func<ExpenseRatioInsightDataItem, TResult> onExpenseRatioInsightDataItem,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccountInsightDataItem(out var accountInsightDataItemValue) => onAccountInsightDataItem(
                accountInsightDataItemValue),
            _ when TryGetBalanceInsightDataItem(out var balanceInsightDataItemValue) => onBalanceInsightDataItem(
                balanceInsightDataItemValue),
            _ when TryGetIdentityInsightDataItem(out var identityInsightDataItemValue) => onIdentityInsightDataItem(
                identityInsightDataItemValue),
            _ when TryGetIncomeInsightDataItem(out var incomeInsightDataItemValue) => onIncomeInsightDataItem(
                incomeInsightDataItemValue),
            _ when TryGetExpenseRatioInsightDataItem(
                out var expenseRatioInsightDataItemValue) => onExpenseRatioInsightDataItem(
                expenseRatioInsightDataItemValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Datum1InsightsApi)} holds no value.")
        };

    public void Match(Action<AccountInsightDataItem> onAccountInsightDataItem,
        Action<BalanceInsightDataItem> onBalanceInsightDataItem,
        Action<IdentityInsightDataItem> onIdentityInsightDataItem,
        Action<IncomeInsightDataItem> onIncomeInsightDataItem,
        Action<ExpenseRatioInsightDataItem> onExpenseRatioInsightDataItem,
        Action<JsonElement> otherwise)
    {
        if (TryGetAccountInsightDataItem(out var accountInsightDataItemValue)) onAccountInsightDataItem(
            accountInsightDataItemValue);
        else if (TryGetBalanceInsightDataItem(out var balanceInsightDataItemValue)) onBalanceInsightDataItem(
            balanceInsightDataItemValue);
        else if (TryGetIdentityInsightDataItem(out var identityInsightDataItemValue)) onIdentityInsightDataItem(
            identityInsightDataItemValue);
        else if (TryGetIncomeInsightDataItem(out var incomeInsightDataItemValue)) onIncomeInsightDataItem(
            incomeInsightDataItemValue);
        else if (TryGetExpenseRatioInsightDataItem(
            out var expenseRatioInsightDataItemValue)) onExpenseRatioInsightDataItem(expenseRatioInsightDataItemValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Datum1InsightsApi)} holds no value.");
    }
}

file sealed class Datum1InsightsApiConverter : JsonConverter<Datum1InsightsApi>
{
    public override Datum1InsightsApi Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AccountInsightDataItem>(root, options, out var accountInsightDataItemValue))
        {
            return Datum1InsightsApi.AccountInsightDataItem(accountInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<BalanceInsightDataItem>(root, options, out var balanceInsightDataItemValue))
        {
            return Datum1InsightsApi.BalanceInsightDataItem(balanceInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<IdentityInsightDataItem>(root, options, out var identityInsightDataItemValue))
        {
            return Datum1InsightsApi.IdentityInsightDataItem(identityInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<IncomeInsightDataItem>(root, options, out var incomeInsightDataItemValue))
        {
            return Datum1InsightsApi.IncomeInsightDataItem(incomeInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<ExpenseRatioInsightDataItem>(
            root,
            options,
            out var expenseRatioInsightDataItemValue))
        {
            return Datum1InsightsApi.ExpenseRatioInsightDataItem(expenseRatioInsightDataItemValue);
        }
        return Datum1InsightsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Datum1InsightsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetAccountInsightDataItem(out var accountInsightDataItemValue))
        {
            JsonSerializer.Serialize(writer, accountInsightDataItemValue, options);
        }
        else if (value.TryGetBalanceInsightDataItem(out var balanceInsightDataItemValue))
        {
            JsonSerializer.Serialize(writer, balanceInsightDataItemValue, options);
        }
        else if (value.TryGetIdentityInsightDataItem(out var identityInsightDataItemValue))
        {
            JsonSerializer.Serialize(writer, identityInsightDataItemValue, options);
        }
        else if (value.TryGetIncomeInsightDataItem(out var incomeInsightDataItemValue))
        {
            JsonSerializer.Serialize(writer, incomeInsightDataItemValue, options);
        }
        else if (value.TryGetExpenseRatioInsightDataItem(out var expenseRatioInsightDataItemValue))
        {
            JsonSerializer.Serialize(writer, expenseRatioInsightDataItemValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Datum1InsightsApi)} contains no valid value to serialize.");
        }
    }
}
