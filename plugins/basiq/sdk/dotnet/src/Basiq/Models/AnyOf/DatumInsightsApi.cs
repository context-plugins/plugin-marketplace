using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

[JsonConverter(typeof(DatumInsightsApiConverter))]
public record DatumInsightsApi
{
    private readonly Optional<ExpenseRatioInsightDataItem> _expenseRatioInsightDataItemValue;

    private readonly Optional<AccountInsightDataItem> _accountInsightDataItemValue;

    private readonly Optional<BalanceInsightDataItem> _balanceInsightDataItemValue;

    private readonly Optional<IdentityInsightDataItem> _identityInsightDataItemValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DatumInsightsApi(Optional<ExpenseRatioInsightDataItem> expenseRatioInsightDataItemValue,
        Optional<AccountInsightDataItem> accountInsightDataItemValue,
        Optional<BalanceInsightDataItem> balanceInsightDataItemValue,
        Optional<IdentityInsightDataItem> identityInsightDataItemValue,
        Optional<UnknownArm> unknownValue)
    {
        _expenseRatioInsightDataItemValue = expenseRatioInsightDataItemValue;
        _accountInsightDataItemValue = accountInsightDataItemValue;
        _balanceInsightDataItemValue = balanceInsightDataItemValue;
        _identityInsightDataItemValue = identityInsightDataItemValue;
        _unknownValue = unknownValue;
    }

    public static DatumInsightsApi ExpenseRatioInsightDataItem(ExpenseRatioInsightDataItem value) =>
        new(Optional<ExpenseRatioInsightDataItem>.Some(value), default, default, default, default);

    public static DatumInsightsApi AccountInsightDataItem(AccountInsightDataItem value) =>
        new(default, Optional<AccountInsightDataItem>.Some(value), default, default, default);

    public static DatumInsightsApi BalanceInsightDataItem(BalanceInsightDataItem value) =>
        new(default, default, Optional<BalanceInsightDataItem>.Some(value), default, default);

    public static DatumInsightsApi IdentityInsightDataItem(IdentityInsightDataItem value) =>
        new(default, default, default, Optional<IdentityInsightDataItem>.Some(value), default);

    internal static DatumInsightsApi Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetExpenseRatioInsightDataItem([NotNullWhen(true)] out ExpenseRatioInsightDataItem? value) =>
        _expenseRatioInsightDataItemValue.TryGetValue(out value);

    public bool TryGetAccountInsightDataItem([NotNullWhen(true)] out AccountInsightDataItem? value) =>
        _accountInsightDataItemValue.TryGetValue(out value);

    public bool TryGetBalanceInsightDataItem([NotNullWhen(true)] out BalanceInsightDataItem? value) =>
        _balanceInsightDataItemValue.TryGetValue(out value);

    public bool TryGetIdentityInsightDataItem([NotNullWhen(true)] out IdentityInsightDataItem? value) =>
        _identityInsightDataItemValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DatumInsightsApi(ExpenseRatioInsightDataItem value) =>
        ExpenseRatioInsightDataItem(value);

    public static implicit operator DatumInsightsApi(AccountInsightDataItem value) => AccountInsightDataItem(value);

    public static implicit operator DatumInsightsApi(BalanceInsightDataItem value) => BalanceInsightDataItem(value);

    public static implicit operator DatumInsightsApi(IdentityInsightDataItem value) => IdentityInsightDataItem(value);

    public TResult Match<TResult>(Func<ExpenseRatioInsightDataItem, TResult> onExpenseRatioInsightDataItem,
        Func<AccountInsightDataItem, TResult> onAccountInsightDataItem,
        Func<BalanceInsightDataItem, TResult> onBalanceInsightDataItem,
        Func<IdentityInsightDataItem, TResult> onIdentityInsightDataItem,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetExpenseRatioInsightDataItem(
                out var expenseRatioInsightDataItemValue) => onExpenseRatioInsightDataItem(
                expenseRatioInsightDataItemValue),
            _ when TryGetAccountInsightDataItem(out var accountInsightDataItemValue) => onAccountInsightDataItem(
                accountInsightDataItemValue),
            _ when TryGetBalanceInsightDataItem(out var balanceInsightDataItemValue) => onBalanceInsightDataItem(
                balanceInsightDataItemValue),
            _ when TryGetIdentityInsightDataItem(out var identityInsightDataItemValue) => onIdentityInsightDataItem(
                identityInsightDataItemValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DatumInsightsApi)} holds no value.")
        };

    public void Match(Action<ExpenseRatioInsightDataItem> onExpenseRatioInsightDataItem,
        Action<AccountInsightDataItem> onAccountInsightDataItem,
        Action<BalanceInsightDataItem> onBalanceInsightDataItem,
        Action<IdentityInsightDataItem> onIdentityInsightDataItem,
        Action<JsonElement> otherwise)
    {
        if (TryGetExpenseRatioInsightDataItem(out var expenseRatioInsightDataItemValue)) onExpenseRatioInsightDataItem(
            expenseRatioInsightDataItemValue);
        else if (TryGetAccountInsightDataItem(out var accountInsightDataItemValue)) onAccountInsightDataItem(
            accountInsightDataItemValue);
        else if (TryGetBalanceInsightDataItem(out var balanceInsightDataItemValue)) onBalanceInsightDataItem(
            balanceInsightDataItemValue);
        else if (TryGetIdentityInsightDataItem(out var identityInsightDataItemValue)) onIdentityInsightDataItem(
            identityInsightDataItemValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DatumInsightsApi)} holds no value.");
    }
}

file sealed class DatumInsightsApiConverter : JsonConverter<DatumInsightsApi>
{
    public override DatumInsightsApi Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ExpenseRatioInsightDataItem>(
            root,
            options,
            out var expenseRatioInsightDataItemValue))
        {
            return DatumInsightsApi.ExpenseRatioInsightDataItem(expenseRatioInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<AccountInsightDataItem>(root, options, out var accountInsightDataItemValue))
        {
            return DatumInsightsApi.AccountInsightDataItem(accountInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<BalanceInsightDataItem>(root, options, out var balanceInsightDataItemValue))
        {
            return DatumInsightsApi.BalanceInsightDataItem(balanceInsightDataItemValue);
        }
        if (JsonSerializer.TryDeserialize<IdentityInsightDataItem>(root, options, out var identityInsightDataItemValue))
        {
            return DatumInsightsApi.IdentityInsightDataItem(identityInsightDataItemValue);
        }
        return DatumInsightsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DatumInsightsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetExpenseRatioInsightDataItem(out var expenseRatioInsightDataItemValue))
        {
            JsonSerializer.Serialize(writer, expenseRatioInsightDataItemValue, options);
        }
        else if (value.TryGetAccountInsightDataItem(out var accountInsightDataItemValue))
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
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(DatumInsightsApi)} contains no valid value to serialize.");
        }
    }
}
