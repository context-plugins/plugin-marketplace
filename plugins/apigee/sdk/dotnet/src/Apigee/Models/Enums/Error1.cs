using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Error in the dependency.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Error1>))]
public sealed record Error1 : OpenStringEnum<Error1>
{
    private Error1(string value) : base(value)
    {
    }

    public static readonly Error1 ErrorUnspecified = new("ERROR_UNSPECIFIED");

    public static readonly Error1 SupplierNotFound = new("SUPPLIER_NOT_FOUND");

    public static readonly Error1 SupplierRecreated = new("SUPPLIER_RECREATED");

    public TResult Match<TResult>(Func<TResult> onErrorUnspecified,
        Func<TResult> onSupplierNotFound,
        Func<TResult> onSupplierRecreated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ErrorUnspecified => onErrorUnspecified(),
            _ when this == SupplierNotFound => onSupplierNotFound(),
            _ when this == SupplierRecreated => onSupplierRecreated(),
            _ => otherwise(Value)
        };

    public void Match(Action onErrorUnspecified,
        Action onSupplierNotFound,
        Action onSupplierRecreated,
        Action<string> otherwise)
    {
        if (this == ErrorUnspecified) onErrorUnspecified();
        else if (this == SupplierNotFound) onSupplierNotFound();
        else if (this == SupplierRecreated) onSupplierRecreated();
        else otherwise(Value);
    }
}
