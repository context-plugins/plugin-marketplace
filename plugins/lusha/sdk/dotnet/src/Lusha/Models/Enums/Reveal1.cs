using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reveal1>))]
public sealed record Reveal1 : OpenStringEnum<Reveal1>
{
    private Reveal1(string value) : base(value)
    {
    }

    public static readonly Reveal1 EmployeesByDepartment = new("employeesByDepartment");

    public static readonly Reveal1 EmployeesByLocation = new("employeesByLocation");

    public static readonly Reveal1 EmployeesBySeniority = new("employeesBySeniority");

    public static readonly Reveal1 Competitors = new("competitors");

    public static readonly Reveal1 Intent = new("intent");

    public static readonly Reveal1 EstimatedAnnualItSpend = new("estimatedAnnualItSpend");

    public static readonly Reveal1 MonthlyWebsiteTraffic = new("monthlyWebsiteTraffic");

    public TResult Match<TResult>(Func<TResult> onEmployeesByDepartment,
        Func<TResult> onEmployeesByLocation,
        Func<TResult> onEmployeesBySeniority,
        Func<TResult> onCompetitors,
        Func<TResult> onIntent,
        Func<TResult> onEstimatedAnnualItSpend,
        Func<TResult> onMonthlyWebsiteTraffic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EmployeesByDepartment => onEmployeesByDepartment(),
            _ when this == EmployeesByLocation => onEmployeesByLocation(),
            _ when this == EmployeesBySeniority => onEmployeesBySeniority(),
            _ when this == Competitors => onCompetitors(),
            _ when this == Intent => onIntent(),
            _ when this == EstimatedAnnualItSpend => onEstimatedAnnualItSpend(),
            _ when this == MonthlyWebsiteTraffic => onMonthlyWebsiteTraffic(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmployeesByDepartment,
        Action onEmployeesByLocation,
        Action onEmployeesBySeniority,
        Action onCompetitors,
        Action onIntent,
        Action onEstimatedAnnualItSpend,
        Action onMonthlyWebsiteTraffic,
        Action<string> otherwise)
    {
        if (this == EmployeesByDepartment) onEmployeesByDepartment();
        else if (this == EmployeesByLocation) onEmployeesByLocation();
        else if (this == EmployeesBySeniority) onEmployeesBySeniority();
        else if (this == Competitors) onCompetitors();
        else if (this == Intent) onIntent();
        else if (this == EstimatedAnnualItSpend) onEstimatedAnnualItSpend();
        else if (this == MonthlyWebsiteTraffic) onMonthlyWebsiteTraffic();
        else otherwise(Value);
    }
}
