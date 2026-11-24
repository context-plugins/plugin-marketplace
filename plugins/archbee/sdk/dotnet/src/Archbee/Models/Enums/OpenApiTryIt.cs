using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. You can now test your API's directly in the editor or on your published docs with the new API Try It!
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OpenApiTryIt>))]
public sealed record OpenApiTryIt : OpenStringEnum<OpenApiTryIt>
{
    private OpenApiTryIt(string value) : base(value)
    {
    }

    public static readonly OpenApiTryIt True = new("true");

    public static readonly OpenApiTryIt False = new("false");

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
