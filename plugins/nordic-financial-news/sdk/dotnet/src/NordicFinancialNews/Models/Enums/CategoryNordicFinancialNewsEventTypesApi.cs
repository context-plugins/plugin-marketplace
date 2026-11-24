using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// The broader category this type belongs to
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CategoryNordicFinancialNewsEventTypesApi>))]
public sealed record CategoryNordicFinancialNewsEventTypesApi : OpenStringEnum<CategoryNordicFinancialNewsEventTypesApi>
{
    private CategoryNordicFinancialNewsEventTypesApi(string value) : base(value)
    {
    }

    public static readonly CategoryNordicFinancialNewsEventTypesApi Earnings = new("earnings");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Ma = new("ma");

    public static readonly CategoryNordicFinancialNewsEventTypesApi ExecutiveChanges = new("executive_changes");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Regulatory = new("regulatory");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Dividends = new("dividends");

    public static readonly CategoryNordicFinancialNewsEventTypesApi EquityActions = new("equity_actions");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Legal = new("legal");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Credit = new("credit");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Bankruptcy = new("bankruptcy");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Partnerships = new("partnerships");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Products = new("products");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Restructuring = new("restructuring");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Macro = new("macro");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Funding = new("funding");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Esg = new("esg");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Operations = new("operations");

    public static readonly CategoryNordicFinancialNewsEventTypesApi AnalystRatings = new("analyst_ratings");

    public static readonly CategoryNordicFinancialNewsEventTypesApi ShareholderActivity = new("shareholder_activity");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Other = new("other");

    public static readonly CategoryNordicFinancialNewsEventTypesApi Commentary = new("commentary");

    public TResult Match<TResult>(Func<TResult> onEarnings,
        Func<TResult> onMa,
        Func<TResult> onExecutiveChanges,
        Func<TResult> onRegulatory,
        Func<TResult> onDividends,
        Func<TResult> onEquityActions,
        Func<TResult> onLegal,
        Func<TResult> onCredit,
        Func<TResult> onBankruptcy,
        Func<TResult> onPartnerships,
        Func<TResult> onProducts,
        Func<TResult> onRestructuring,
        Func<TResult> onMacro,
        Func<TResult> onFunding,
        Func<TResult> onEsg,
        Func<TResult> onOperations,
        Func<TResult> onAnalystRatings,
        Func<TResult> onShareholderActivity,
        Func<TResult> onOther,
        Func<TResult> onCommentary,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Earnings => onEarnings(),
            _ when this == Ma => onMa(),
            _ when this == ExecutiveChanges => onExecutiveChanges(),
            _ when this == Regulatory => onRegulatory(),
            _ when this == Dividends => onDividends(),
            _ when this == EquityActions => onEquityActions(),
            _ when this == Legal => onLegal(),
            _ when this == Credit => onCredit(),
            _ when this == Bankruptcy => onBankruptcy(),
            _ when this == Partnerships => onPartnerships(),
            _ when this == Products => onProducts(),
            _ when this == Restructuring => onRestructuring(),
            _ when this == Macro => onMacro(),
            _ when this == Funding => onFunding(),
            _ when this == Esg => onEsg(),
            _ when this == Operations => onOperations(),
            _ when this == AnalystRatings => onAnalystRatings(),
            _ when this == ShareholderActivity => onShareholderActivity(),
            _ when this == Other => onOther(),
            _ when this == Commentary => onCommentary(),
            _ => otherwise(Value)
        };

    public void Match(Action onEarnings,
        Action onMa,
        Action onExecutiveChanges,
        Action onRegulatory,
        Action onDividends,
        Action onEquityActions,
        Action onLegal,
        Action onCredit,
        Action onBankruptcy,
        Action onPartnerships,
        Action onProducts,
        Action onRestructuring,
        Action onMacro,
        Action onFunding,
        Action onEsg,
        Action onOperations,
        Action onAnalystRatings,
        Action onShareholderActivity,
        Action onOther,
        Action onCommentary,
        Action<string> otherwise)
    {
        if (this == Earnings) onEarnings();
        else if (this == Ma) onMa();
        else if (this == ExecutiveChanges) onExecutiveChanges();
        else if (this == Regulatory) onRegulatory();
        else if (this == Dividends) onDividends();
        else if (this == EquityActions) onEquityActions();
        else if (this == Legal) onLegal();
        else if (this == Credit) onCredit();
        else if (this == Bankruptcy) onBankruptcy();
        else if (this == Partnerships) onPartnerships();
        else if (this == Products) onProducts();
        else if (this == Restructuring) onRestructuring();
        else if (this == Macro) onMacro();
        else if (this == Funding) onFunding();
        else if (this == Esg) onEsg();
        else if (this == Operations) onOperations();
        else if (this == AnalystRatings) onAnalystRatings();
        else if (this == ShareholderActivity) onShareholderActivity();
        else if (this == Other) onOther();
        else if (this == Commentary) onCommentary();
        else otherwise(Value);
    }
}
