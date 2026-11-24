using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope DocumentsRead = new("documents:read");

    public static readonly Scope DocumentsWrite = new("documents:write");

    public static readonly Scope SignRequestsRead = new("sign-requests:read");

    public static readonly Scope SignRequestsWrite = new("sign-requests:write");

    public static readonly Scope WebhooksManage = new("webhooks:manage");

    public TResult Match<TResult>(Func<TResult> onDocumentsRead,
        Func<TResult> onDocumentsWrite,
        Func<TResult> onSignRequestsRead,
        Func<TResult> onSignRequestsWrite,
        Func<TResult> onWebhooksManage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DocumentsRead => onDocumentsRead(),
            _ when this == DocumentsWrite => onDocumentsWrite(),
            _ when this == SignRequestsRead => onSignRequestsRead(),
            _ when this == SignRequestsWrite => onSignRequestsWrite(),
            _ when this == WebhooksManage => onWebhooksManage(),
            _ => otherwise(Value)
        };

    public void Match(Action onDocumentsRead,
        Action onDocumentsWrite,
        Action onSignRequestsRead,
        Action onSignRequestsWrite,
        Action onWebhooksManage,
        Action<string> otherwise)
    {
        if (this == DocumentsRead) onDocumentsRead();
        else if (this == DocumentsWrite) onDocumentsWrite();
        else if (this == SignRequestsRead) onSignRequestsRead();
        else if (this == SignRequestsWrite) onSignRequestsWrite();
        else if (this == WebhooksManage) onWebhooksManage();
        else otherwise(Value);
    }
}
