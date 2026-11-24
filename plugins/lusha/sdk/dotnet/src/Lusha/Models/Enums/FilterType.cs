using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FilterType>))]
public sealed record FilterType : OpenStringEnum<FilterType>
{
    private FilterType(string value) : base(value)
    {
    }

    public static readonly FilterType Departments = new("departments");

    public static readonly FilterType Seniority = new("seniority");

    public static readonly FilterType ExistingDataPoints = new("existingDataPoints");

    public static readonly FilterType Countries = new("countries");

    public static readonly FilterType Locations = new("locations");

    public TResult Match<TResult>(Func<TResult> onDepartments,
        Func<TResult> onSeniority,
        Func<TResult> onExistingDataPoints,
        Func<TResult> onCountries,
        Func<TResult> onLocations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Departments => onDepartments(),
            _ when this == Seniority => onSeniority(),
            _ when this == ExistingDataPoints => onExistingDataPoints(),
            _ when this == Countries => onCountries(),
            _ when this == Locations => onLocations(),
            _ => otherwise(Value)
        };

    public void Match(Action onDepartments,
        Action onSeniority,
        Action onExistingDataPoints,
        Action onCountries,
        Action onLocations,
        Action<string> otherwise)
    {
        if (this == Departments) onDepartments();
        else if (this == Seniority) onSeniority();
        else if (this == ExistingDataPoints) onExistingDataPoints();
        else if (this == Countries) onCountries();
        else if (this == Locations) onLocations();
        else otherwise(Value);
    }
}
