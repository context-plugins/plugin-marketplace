using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// The account category
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Assets = new("Assets");

    public static readonly Category Liabilities = new("Liabilities");

    public static readonly Category Equity = new("Equity");

    public static readonly Category Income = new("Income");

    public static readonly Category CostOfGoodsSold = new("Cost of Goods Sold");

    public static readonly Category Expense = new("Expense");

    public TResult Match<TResult>(Func<TResult> onAssets,
        Func<TResult> onLiabilities,
        Func<TResult> onEquity,
        Func<TResult> onIncome,
        Func<TResult> onCostOfGoodsSold,
        Func<TResult> onExpense,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Assets => onAssets(),
            _ when this == Liabilities => onLiabilities(),
            _ when this == Equity => onEquity(),
            _ when this == Income => onIncome(),
            _ when this == CostOfGoodsSold => onCostOfGoodsSold(),
            _ when this == Expense => onExpense(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssets,
        Action onLiabilities,
        Action onEquity,
        Action onIncome,
        Action onCostOfGoodsSold,
        Action onExpense,
        Action<string> otherwise)
    {
        if (this == Assets) onAssets();
        else if (this == Liabilities) onLiabilities();
        else if (this == Equity) onEquity();
        else if (this == Income) onIncome();
        else if (this == CostOfGoodsSold) onCostOfGoodsSold();
        else if (this == Expense) onExpense();
        else otherwise(Value);
    }
}
