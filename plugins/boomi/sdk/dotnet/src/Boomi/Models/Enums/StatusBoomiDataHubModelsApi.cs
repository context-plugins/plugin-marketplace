using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Publication status of the model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusBoomiDataHubModelsApi>))]
public sealed record StatusBoomiDataHubModelsApi : OpenStringEnum<StatusBoomiDataHubModelsApi>
{
    private StatusBoomiDataHubModelsApi(string value) : base(value)
    {
    }

    public static readonly StatusBoomiDataHubModelsApi Draft = new("DRAFT");

    public static readonly StatusBoomiDataHubModelsApi Published = new("PUBLISHED");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onPublished, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPublished, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
