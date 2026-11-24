using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Application-specific error code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code2>))]
public sealed record Code2 : OpenStringEnum<Code2>
{
    private Code2(string value) : base(value)
    {
    }

    public static readonly Code2 ForbiddenAccess = new("forbidden-access");

    public static readonly Code2 NoProductionAccess = new("no-production-access");

    public static readonly Code2 AccessDenied = new("access-denied");

    public TResult Match<TResult>(Func<TResult> onForbiddenAccess,
        Func<TResult> onNoProductionAccess,
        Func<TResult> onAccessDenied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ForbiddenAccess => onForbiddenAccess(),
            _ when this == NoProductionAccess => onNoProductionAccess(),
            _ when this == AccessDenied => onAccessDenied(),
            _ => otherwise(Value)
        };

    public void Match(Action onForbiddenAccess,
        Action onNoProductionAccess,
        Action onAccessDenied,
        Action<string> otherwise)
    {
        if (this == ForbiddenAccess) onForbiddenAccess();
        else if (this == NoProductionAccess) onNoProductionAccess();
        else if (this == AccessDenied) onAccessDenied();
        else otherwise(Value);
    }
}
