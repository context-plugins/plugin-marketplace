using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API tree.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ShowDownloadOpenApiFile>))]
public sealed record ShowDownloadOpenApiFile : OpenStringEnum<ShowDownloadOpenApiFile>
{
    private ShowDownloadOpenApiFile(string value) : base(value)
    {
    }

    public static readonly ShowDownloadOpenApiFile True = new("true");

    public static readonly ShowDownloadOpenApiFile False = new("false");

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
