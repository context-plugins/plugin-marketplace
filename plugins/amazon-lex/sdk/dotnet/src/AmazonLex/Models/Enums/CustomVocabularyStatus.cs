using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of removing the custom vocabulary.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomVocabularyStatus>))]
public sealed record CustomVocabularyStatus : OpenStringEnum<CustomVocabularyStatus>
{
    private CustomVocabularyStatus(string value) : base(value)
    {
    }

    public static readonly CustomVocabularyStatus Ready = new("Ready");

    public static readonly CustomVocabularyStatus Deleting = new("Deleting");

    public static readonly CustomVocabularyStatus Exporting = new("Exporting");

    public static readonly CustomVocabularyStatus Importing = new("Importing");

    public static readonly CustomVocabularyStatus Creating = new("Creating");

    public TResult Match<TResult>(Func<TResult> onReady,
        Func<TResult> onDeleting,
        Func<TResult> onExporting,
        Func<TResult> onImporting,
        Func<TResult> onCreating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ready => onReady(),
            _ when this == Deleting => onDeleting(),
            _ when this == Exporting => onExporting(),
            _ when this == Importing => onImporting(),
            _ when this == Creating => onCreating(),
            _ => otherwise(Value)
        };

    public void Match(Action onReady,
        Action onDeleting,
        Action onExporting,
        Action onImporting,
        Action onCreating,
        Action<string> otherwise)
    {
        if (this == Ready) onReady();
        else if (this == Deleting) onDeleting();
        else if (this == Exporting) onExporting();
        else if (this == Importing) onImporting();
        else if (this == Creating) onCreating();
        else otherwise(Value);
    }
}
