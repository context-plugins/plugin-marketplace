using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// decision for a decision, fact otherwise, when omitted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind13>))]
public sealed record Kind13 : OpenStringEnum<Kind13>
{
    private Kind13(string value) : base(value)
    {
    }

    public static readonly Kind13 Fact = new("fact");

    public static readonly Kind13 Convention = new("convention");

    public static readonly Kind13 Decision = new("decision");

    public static readonly Kind13 Procedure = new("procedure");

    public static readonly Kind13 Glossary = new("glossary");

    public static readonly Kind13 Contact = new("contact");

    public static readonly Kind13 KnownIssue = new("known_issue");

    public TResult Match<TResult>(Func<TResult> onFact,
        Func<TResult> onConvention,
        Func<TResult> onDecision,
        Func<TResult> onProcedure,
        Func<TResult> onGlossary,
        Func<TResult> onContact,
        Func<TResult> onKnownIssue,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fact => onFact(),
            _ when this == Convention => onConvention(),
            _ when this == Decision => onDecision(),
            _ when this == Procedure => onProcedure(),
            _ when this == Glossary => onGlossary(),
            _ when this == Contact => onContact(),
            _ when this == KnownIssue => onKnownIssue(),
            _ => otherwise(Value)
        };

    public void Match(Action onFact,
        Action onConvention,
        Action onDecision,
        Action onProcedure,
        Action onGlossary,
        Action onContact,
        Action onKnownIssue,
        Action<string> otherwise)
    {
        if (this == Fact) onFact();
        else if (this == Convention) onConvention();
        else if (this == Decision) onDecision();
        else if (this == Procedure) onProcedure();
        else if (this == Glossary) onGlossary();
        else if (this == Contact) onContact();
        else if (this == KnownIssue) onKnownIssue();
        else otherwise(Value);
    }
}
