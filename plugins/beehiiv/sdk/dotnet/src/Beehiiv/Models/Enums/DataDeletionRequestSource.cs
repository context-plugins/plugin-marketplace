using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The source from which the deletion request was created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataDeletionRequestSource>))]
public sealed record DataDeletionRequestSource : OpenStringEnum<DataDeletionRequestSource>
{
    private DataDeletionRequestSource(string value) : base(value)
    {
    }

    public static readonly DataDeletionRequestSource Zendesk = new("zendesk");

    public static readonly DataDeletionRequestSource Retool = new("retool");

    public static readonly DataDeletionRequestSource Website = new("website");

    public static readonly DataDeletionRequestSource App = new("app");

    public static readonly DataDeletionRequestSource PublicApi = new("public_api");

    public static readonly DataDeletionRequestSource Other = new("other");

    public TResult Match<TResult>(Func<TResult> onZendesk,
        Func<TResult> onRetool,
        Func<TResult> onWebsite,
        Func<TResult> onApp,
        Func<TResult> onPublicApi,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Zendesk => onZendesk(),
            _ when this == Retool => onRetool(),
            _ when this == Website => onWebsite(),
            _ when this == App => onApp(),
            _ when this == PublicApi => onPublicApi(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onZendesk,
        Action onRetool,
        Action onWebsite,
        Action onApp,
        Action onPublicApi,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Zendesk) onZendesk();
        else if (this == Retool) onRetool();
        else if (this == Website) onWebsite();
        else if (this == App) onApp();
        else if (this == PublicApi) onPublicApi();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
