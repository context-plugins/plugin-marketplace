using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

/// <summary>
/// Who the webhook belongs to. 'user' is the authenticated user, the default and the existing behaviour. 'workspace' is the whole account: it receives every matching event with no per-user filter, and each event is delivered once rather than once per attendee. Creating one requires a privileged API key.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScopeFellowDeveloperWebhooksApi>))]
public sealed record ScopeFellowDeveloperWebhooksApi : OpenStringEnum<ScopeFellowDeveloperWebhooksApi>
{
    private ScopeFellowDeveloperWebhooksApi(string value) : base(value)
    {
    }

    public static readonly ScopeFellowDeveloperWebhooksApi User = new("user");

    public static readonly ScopeFellowDeveloperWebhooksApi Workspace = new("workspace");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onWorkspace, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Workspace => onWorkspace(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onWorkspace, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Workspace) onWorkspace();
        else otherwise(Value);
    }
}
