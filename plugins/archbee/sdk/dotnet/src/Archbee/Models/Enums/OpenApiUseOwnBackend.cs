using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your backend.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OpenApiUseOwnBackend>))]
public sealed record OpenApiUseOwnBackend : OpenStringEnum<OpenApiUseOwnBackend>
{
    private OpenApiUseOwnBackend(string value) : base(value)
    {
    }

    public static readonly OpenApiUseOwnBackend True = new("true");

    public static readonly OpenApiUseOwnBackend False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
