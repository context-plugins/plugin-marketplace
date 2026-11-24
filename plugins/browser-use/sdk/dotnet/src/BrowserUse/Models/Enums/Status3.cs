using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

/// <summary>
/// "pending" | "uploaded".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Pending = new("pending");

    public static readonly Status3 Uploaded = new("uploaded");

    public TResult Match<TResult>(Func<TResult> onPending, Func<TResult> onUploaded, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Uploaded => onUploaded(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onUploaded, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Uploaded) onUploaded();
        else otherwise(Value);
    }
}
