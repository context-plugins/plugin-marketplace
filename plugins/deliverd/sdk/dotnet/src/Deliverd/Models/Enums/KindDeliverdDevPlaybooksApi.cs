using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// procedure for playbooks of steps, prompt for approved prompts; both when omitted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevPlaybooksApi>))]
public sealed record KindDeliverdDevPlaybooksApi : OpenStringEnum<KindDeliverdDevPlaybooksApi>
{
    private KindDeliverdDevPlaybooksApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevPlaybooksApi Procedure = new("procedure");

    public static readonly KindDeliverdDevPlaybooksApi Prompt = new("prompt");

    public TResult Match<TResult>(Func<TResult> onProcedure, Func<TResult> onPrompt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Procedure => onProcedure(),
            _ when this == Prompt => onPrompt(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcedure, Action onPrompt, Action<string> otherwise)
    {
        if (this == Procedure) onProcedure();
        else if (this == Prompt) onPrompt();
        else otherwise(Value);
    }
}
