using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FilterTypeLushaSignalsApi>))]
public sealed record FilterTypeLushaSignalsApi : OpenStringEnum<FilterTypeLushaSignalsApi>
{
    private FilterTypeLushaSignalsApi(string value) : base(value)
    {
    }

    public static readonly FilterTypeLushaSignalsApi NewsEventTypes = new("newsEventTypes");

    public static readonly FilterTypeLushaSignalsApi HiringByDepartments = new("hiringByDepartments");

    public static readonly FilterTypeLushaSignalsApi HiringByLocations = new("hiringByLocations");

    public static readonly FilterTypeLushaSignalsApi IntentCategories = new("intentCategories");

    public TResult Match<TResult>(Func<TResult> onNewsEventTypes,
        Func<TResult> onHiringByDepartments,
        Func<TResult> onHiringByLocations,
        Func<TResult> onIntentCategories,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NewsEventTypes => onNewsEventTypes(),
            _ when this == HiringByDepartments => onHiringByDepartments(),
            _ when this == HiringByLocations => onHiringByLocations(),
            _ when this == IntentCategories => onIntentCategories(),
            _ => otherwise(Value)
        };

    public void Match(Action onNewsEventTypes,
        Action onHiringByDepartments,
        Action onHiringByLocations,
        Action onIntentCategories,
        Action<string> otherwise)
    {
        if (this == NewsEventTypes) onNewsEventTypes();
        else if (this == HiringByDepartments) onHiringByDepartments();
        else if (this == HiringByLocations) onHiringByLocations();
        else if (this == IntentCategories) onIntentCategories();
        else otherwise(Value);
    }
}
