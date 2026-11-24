using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Type of entity to search for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType>))]
public sealed record EntityType : OpenStringEnum<EntityType>
{
    private EntityType(string value) : base(value)
    {
    }

    public static readonly EntityType People = new("people");

    public static readonly EntityType Companies = new("companies");

    public TResult Match<TResult>(Func<TResult> onPeople, Func<TResult> onCompanies, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == People => onPeople(),
            _ when this == Companies => onCompanies(),
            _ => otherwise(Value)
        };

    public void Match(Action onPeople, Action onCompanies, Action<string> otherwise)
    {
        if (this == People) onPeople();
        else if (this == Companies) onCompanies();
        else otherwise(Value);
    }
}
