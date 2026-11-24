using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope CompletionScopeUnspecified = new("COMPLETION_SCOPE_UNSPECIFIED");

    public static readonly Scope Tenant = new("TENANT");

    public static readonly Scope Public = new("PUBLIC");

    public TResult Match<TResult>(Func<TResult> onCompletionScopeUnspecified,
        Func<TResult> onTenant,
        Func<TResult> onPublic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CompletionScopeUnspecified => onCompletionScopeUnspecified(),
            _ when this == Tenant => onTenant(),
            _ when this == Public => onPublic(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompletionScopeUnspecified, Action onTenant, Action onPublic, Action<string> otherwise)
    {
        if (this == CompletionScopeUnspecified) onCompletionScopeUnspecified();
        else if (this == Tenant) onTenant();
        else if (this == Public) onPublic();
        else otherwise(Value);
    }
}
